import 'zone.js/dist/zone-node';
import 'reflect-metadata';

const test = process.env['TEST'] === 'true';

const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '.', 'dist', 'index.html')).toString();
const win = domino.createWindow(template);
const files = fs.readdirSync(`${process.cwd()}/dist-server`);

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

import { enableProdMode } from '@angular/core';
import * as express from 'express';
import * as compression from 'compression';
import * as cookieparser from 'cookie-parser';
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const mainFiles = files.filter((file) => file.startsWith('main'));
const hash = mainFiles[0].split('.')[1];
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./dist-server/main.${hash}`);
import { ngExpressEngine } from '@nguniversal/express-engine';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
const PORT = process.env.PORT || 4000;
import { ROUTES } from './static.paths';
import { exit } from 'process';

enableProdMode();

const app = express();
app.use(compression());
app.use(cookieparser());

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)],
  }),
);

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(path.join(__dirname, '.', 'dist')));
app.get(ROUTES, express.static(path.join(__dirname, '.', 'static')));

app.get('*', (req, res) => {
  global['navigator'] = req['headers']['user-agent'];
  const http =
    req.headers['x-forwarded-proto'] === undefined ? 'http' : req.headers['x-forwarded-proto'];

  const url = req.originalUrl;
  // tslint:disable-next-line:no-console
  res.render(
    '../dist/index',
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
      if (err) {
        throw err;
      }

      res.send(html);
    },
  );
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
