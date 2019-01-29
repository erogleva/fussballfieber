import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateService as NGXTranslateService, } from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';
import { Observable, of } from 'rxjs';
import { ILang } from '../interfaces/translate.interface';
import { UniversalStorage } from '../storage/universal.storage';

const LANG_LIST: ILang[] = [
  {
    code: 'de',
    name: 'German',
    culture: 'de-DE',
    icon: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdW' +
      'ctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj' +
      '0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9I' +
      'jUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGREE0NDsiIGQ9Ik0xNS45MjMsMzQ1LjA0M0M1Mi4wOTQsNDQyLjUyNywxNDUuOTI5LDUxMiwyNTYsNTEyczIwMy45MDYtNjkuNDczLDI0MC4wNzct' +
      'MTY2Ljk1N0wyNTYsMzIyLjc4MyAgTDE1LjkyMywzNDUuMDQzeiIvPgo8cGF0aCBkPSJNMjU2LDBDMTQ1LjkyOSwwLDUyLjA5NCw2OS40NzIsMTUuOTIzLDE2Ni45NTdMMjU2LDE4OS4yMTdsMjQwLjA3Ny0yMi4yNjFDNDU5Ljk' +
      'wNiw2OS40NzIsMzY2LjA3MSwwLDI1NiwweiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDgwMDI3OyIgZD0iTTE1LjkyMywxNjYuOTU3QzUuNjMzLDE5NC42OSwwLDIyNC42ODYsMCwyNTZzNS42MzMsNjEuMzEsMTUuOTIzLDg5LjA' +
      '0M2g0ODAuMTU1ICBDNTA2LjM2OCwzMTcuMzEsNTEyLDI4Ny4zMTQsNTEyLDI1NnMtNS42MzItNjEuMzEtMTUuOTIzLTg5LjA0M0gxNS45MjN6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c' +
      '+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo='
  },
  {
    code: 'en',
    name: 'English',
    culture: 'en-US',
    icon: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsd' +
      'WctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2l' +
      'vbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkd' +
      'Gg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojRjBGMEYwOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik01Mi45Miw' +
      'xMDAuMTQyYy0yMC4xMDksMjYuMTYzLTM1LjI3Miw1Ni4zMTgtNDQuMTAxLDg5LjA3N2gxMzMuMTc4TDUyLjkyLDEwMC4xNDJ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMDA1MkI0OyIgZD0iTTUwMy4xODEsMTg5LjIxOWMtOC' +
      '44MjktMzIuNzU4LTIzLjk5My02Mi45MTMtNDQuMTAxLTg5LjA3NmwtODkuMDc1LDg5LjA3Nkg1MDMuMTgxeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik04LjgxOSwzMjIuNzg0YzguODMsMzIuNzU4LDIz' +
      'Ljk5Myw2Mi45MTMsNDQuMTAxLDg5LjA3NWw4OS4wNzQtODkuMDc1TDguODE5LDMyMi43ODRMOC44MTksMzIyLjc4NCAgIHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiBkPSJNNDExLjg1OCw1Mi45MjFjLTI2Lj' +
      'E2My0yMC4xMDktNTYuMzE3LTM1LjI3Mi04OS4wNzYtNDQuMTAydjEzMy4xNzdMNDExLjg1OCw1Mi45MjF6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMDA1MkI0OyIgZD0iTTEwMC4xNDIsNDU5LjA3OWMyNi4xNjMsMjAuMTA5' +
      'LDU2LjMxOCwzNS4yNzIsODkuMDc2LDQ0LjEwMlYzNzAuMDA1TDEwMC4xNDIsNDU5LjA3OXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiBkPSJNMTg5LjIxNyw4LjgxOWMtMzIuNzU4LDguODMtNjIuOTEzLDIzLj' +
      'k5My04OS4wNzUsNDQuMTAxbDg5LjA3NSw4OS4wNzVWOC44MTl6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMDA1MkI0OyIgZD0iTTMyMi43ODMsNTAzLjE4MWMzMi43NTgtOC44Myw2Mi45MTMtMjMuOTkzLDg5LjA3NS00NC4x' +
      'MDFsLTg5LjA3NS04OS4wNzVWNTAzLjE4MXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiBkPSJNMzcwLjAwNSwzMjIuNzg0bDg5LjA3NSw4OS4wNzZjMjAuMTA4LTI2LjE2MiwzNS4yNzItNTYuMzE4LDQ0LjEwMS' +
      '04OS4wNzZIMzcwLjAwNXoiLz4KPC9nPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNNTA5LjgzMywyMjIuNjA5aC0yMjAuNDRoLTAuMDAxVjIuMTY3QzI3OC40NjEsMC43NDQsMjY3LjMxNywwLDI1Niww' +
      'ICAgYy0xMS4zMTksMC0yMi40NjEsMC43NDQtMzMuMzkxLDIuMTY3djIyMC40NHYwLjAwMUgyLjE2N0MwLjc0NCwyMzMuNTM5LDAsMjQ0LjY4MywwLDI1NmMwLDExLjMxOSwwLjc0NCwyMi40NjEsMi4xNjcsMzMuMzkxICAgaD' +
      'IyMC40NGgwLjAwMXYyMjAuNDQyQzIzMy41MzksNTExLjI1NiwyNDQuNjgxLDUxMiwyNTYsNTEyYzExLjMxNywwLDIyLjQ2MS0wLjc0MywzMy4zOTEtMi4xNjd2LTIyMC40NHYtMC4wMDFoMjIwLjQ0MiAgIEM1MTEuMjU2LDI3' +
      'OC40NjEsNTEyLDI2Ny4zMTksNTEyLDI1NkM1MTIsMjQ0LjY4Myw1MTEuMjU2LDIzMy41MzksNTA5LjgzMywyMjIuNjA5eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0zMjIuNzgzLDMyMi43ODRMMzIyLj' +
      'c4MywzMjIuNzg0TDQzNy4wMTksNDM3LjAyYzUuMjU0LTUuMjUyLDEwLjI2Ni0xMC43NDMsMTUuMDQ4LTE2LjQzNSAgIGwtOTcuODAyLTk3LjgwMmgtMzEuNDgyVjMyMi43ODR6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRDgw' +
      'MDI3OyIgZD0iTTE4OS4yMTcsMzIyLjc4NGgtMC4wMDJMNzQuOTgsNDM3LjAxOWM1LjI1Miw1LjI1NCwxMC43NDMsMTAuMjY2LDE2LjQzNSwxNS4wNDhsOTcuODAyLTk3LjgwNCAgIFYzMjIuNzg0eiIvPgoJPHBhdGggc3R5bG' +
      'U9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0xODkuMjE3LDE4OS4yMTl2LTAuMDAyTDc0Ljk4MSw3NC45OGMtNS4yNTQsNS4yNTItMTAuMjY2LDEwLjc0My0xNS4wNDgsMTYuNDM1bDk3LjgwMyw5Ny44MDMgICBIMTg5LjIxN3oiLz4KC' +
      'TxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMzIyLjc4MywxODkuMjE5TDMyMi43ODMsMTg5LjIxOUw0MzcuMDIsNzQuOTgxYy01LjI1Mi01LjI1NC0xMC43NDMtMTAuMjY2LTE2LjQzNS0xNS4wNDcgICBsLTk3Ljgw' +
      'Miw5Ny44MDNWMTg5LjIxOXoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4' +
      'KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'
  },
  {
    code: 'es',
    name: 'Spanish',
    culture: 'es-ES',
    icon: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWc' +
      'tSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0' +
      'iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjU' +
      'xMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGREE0NDsiIGQ9Ik0wLDI1NmMwLDMxLjMxNCw1LjYzMyw2MS4zMSwxNS45MjMsODkuMDQzTDI1NiwzNjcuMzA0bDI0MC4wNzctMjIuMjYxICBDNTA2LjM' +
      '2NywzMTcuMzEsNTEyLDI4Ny4zMTQsNTEyLDI1NnMtNS42MzMtNjEuMzEtMTUuOTIzLTg5LjA0M0wyNTYsMTQ0LjY5NkwxNS45MjMsMTY2Ljk1N0M1LjYzMywxOTQuNjksMCwyMjQuNjg2LDAsMjU2eiIvPgo8Zz4KCTxwYXRoIHN' +
      '0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNNDk2LjA3NywxNjYuOTU3QzQ1OS45MDYsNjkuNDczLDM2Ni4wNzEsMCwyNTYsMFM1Mi4wOTQsNjkuNDczLDE1LjkyMywxNjYuOTU3SDQ5Ni4wNzd6Ii8+Cgk8cGF0aCBzdHlsZT0iZml' +
      'sbDojRDgwMDI3OyIgZD0iTTE1LjkyMywzNDUuMDQzQzUyLjA5NCw0NDIuNTI3LDE0NS45MjksNTEyLDI1Niw1MTJzMjAzLjkwNi02OS40NzMsMjQwLjA3Ny0xNjYuOTU3SDE1LjkyM3oiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9' +
      'nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'
  },
];
const LANG_DEFAULT: ILang = LANG_LIST[0];
const STORAGE_LANG_NAME = 'langCode';

@Injectable()
export class TranslatesService {
  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    @Inject(DOCUMENT) private _document: any,
    @Inject(REQUEST) private _request: any,
    @Inject(NGXTranslateService) private _translate: NGXTranslateService,
    @Inject(MetaService) private _meta: MetaService,
    @Inject(REQUEST) private _req: any,
    @Inject(UniversalStorage) private _appStorage: Storage,
  ) {
  }

  public initLanguage(): Promise<any> {
    return new Promise((resolve: Function) => {
      this._translate.addLangs(LANG_LIST.map((lang: ILang) => lang.code));
      const language: ILang = this._getLanguage();
      if (language) {
        this._translate.setDefaultLang(language.code);
      } else {
        this._translate.setDefaultLang(LANG_DEFAULT.code);
      }
      this._setLanguage(language);
      resolve();
    });
  }

  private _getLanguage(): ILang {

    this._req.cookie = this._req.headers['cookie'];

    let language: ILang = this._getFindLang(this._appStorage.getItem(STORAGE_LANG_NAME));
    if (language) {
      return language;
    }
    if (isPlatformBrowser(this._platformId)) {
      language = this._getFindLang(this._translate.getBrowserLang());
    }
    if (isPlatformServer(this._platformId)) {
      try {
        const reqLangList: string[] = this._request.headers['accept-language']
          .split(';')[0]
          .split(',');
        language = LANG_LIST.find(
          (lang: ILang) =>
            reqLangList.indexOf(lang.code) !== -1 || reqLangList.indexOf(lang.culture) !== -1,
        );
      } catch (err) {
        language = LANG_DEFAULT;
      }
    }
    language = language || LANG_DEFAULT;
    this._appStorage.setItem(STORAGE_LANG_NAME, language.code);
    return language;
  }

  private _getFindLang(code: string): ILang | null {
    return code ? LANG_LIST.find((lang: ILang) => lang.code === code) : null;
  }

  private _setLanguage(lang: ILang): void {
    this._translate.use(lang.code).subscribe(() => {
      this._meta.setTag('og:locale', lang.culture);
      this._document.documentElement.lang = lang.code;
    });
  }

  public changeLang(lang: ILang): void {
    const language: ILang = this._getFindLang(lang.code);
    if (!language || language.code === this._translate.currentLang) {
      return;
    }
    this._appStorage.setItem(STORAGE_LANG_NAME, language.code);
    this._setLanguage(language);
  }

  public getLangList(): Observable<ILang[]> {
    return of(LANG_LIST);
  }

  public getCurrentLang(): any {
    return this._getFindLang(this._translate.currentLang);
  }
}

export class CommonMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    if (
      params.key.match(/\w+\.\w+/) &&
      params.translateService.translations['de'] &&
      !params.translateService.translations['de'][params.key]
    ) {
      console.warn(`=> "${params.key}"`);
    }
    return params.key;
  }
}
