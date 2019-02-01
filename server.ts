import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import * as compression from 'compression';
import * as cookieparser from 'cookie-parser';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';

const test = process.env['TEST'] === 'true';

const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(process.cwd(), '/dist/app/browser', 'index.html')).toString();
const win = domino.createWindow(template);
const files = fs.readdirSync(`${process.cwd()}/dist/app/server`);

global['window'] = win;
Object.defineProperty(win.document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
global['document'] = win.document;
global['CSS'] = null;
// global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;
global['Prism'] = null;

// (global as any).WebSocket = require('ws');
// (global as any).XMLHttpRequest = require('xhr2');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const mainFiles = files.filter((file) => file.startsWith('main'));
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./dist/app/server/main`);
const PORT = process.env.PORT || 4000;

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
export const app = express();
app.use(compression());
app.use(cookieparser());

app.engine('html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }));

app.set('view engine', 'html');
app.set('views', 'dist/app/browser');

app.get('*.*', express.static(path.join(__dirname, '.', 'dist/app/browser')));

app.get('*', (req, res) => {
  global['navigator'] = req['headers']['user-agent'];
  const http =
    req.headers['x-forwarded-proto'] === undefined ? 'http' : req.headers['x-forwarded-proto'];

  const url = req.originalUrl;
  // tslint:disable-next-line:no-console
  console.time(`GET: ${url}`);
  res.render(
    'index',
    {
      req: req,
      res: res,
      providers: [
        {
          provide: REQUEST,
          useValue: req,
        },
        {
          provide: RESPONSE,
          useValue: res,
        },
        {
          provide: 'ORIGIN_URL',
          useValue: `${http}://${req.headers.host}`,
        },
      ],
    },
    (err, html) => {
      if (!!err) {
        throw err;
      }

      // tslint:disable-next-line:no-console
      console.timeEnd(`GET: ${url}`);
      res.send(html);
    },
  );
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
