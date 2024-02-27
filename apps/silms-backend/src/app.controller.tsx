import { Controller, Get, Req, Res, Version } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Response } from 'express';
import { initialContentMap as iCM } from './global/backend.settings';
import { assetMap as aM } from './global/backend.settings';
import * as acceptLangParser from 'accept-language-parser';
import { RequestExtended as Request } from './global/app.interfaces';
import App from '../../silms-frontend/src/App';

@ApiTags('Hello')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  initialContentMap = { ...iCM, title: 'Welcome to Wisr' };

  assetMap = { ...aM, initialContentMap: this.initialContentMap };


  @Get('*')
  getSsrRoute(@Req() req: Request, @Res() res: Response) {
    
    const acceptLanguage = acceptLangParser.parse(
      req.headers['accept-language'],
    );

    const clientFirstAcceptLanguageRegion = acceptLanguage[0].region
      ? `-${acceptLanguage[0].region}`
      : '';
    const clientFirstAcceptLanguage = `${acceptLanguage[0].code}${clientFirstAcceptLanguageRegion}`;
    let assetMap = {
      ...this.assetMap,
      baseUrl: '/',
      initialContentMap: {
        ...this.initialContentMap,
        'hello-message': "Hello there",
      },
      clientFirstAcceptLanguage,
    };

    const entryPoint = [assetMap['main.js']];

    const { pipe, abort: _abort } = renderToPipeableStream(
      //Below commented out is for when I use i18n middleware
      //@ts-ignore
      /*<I18nextProvider i18n={req.i18n}><StaticRouter context={context} location={req.url}>
          <AppWithNavDemo assetMap={assetMap} />
        </StaticRouter>
      </I18nextProvider>,*/
      <StaticRouter location={req.url}>
        <App assetMap={assetMap} />
      </StaticRouter>,
      {
        bootstrapScriptContent: `window.assetMap = ${JSON.stringify(
          assetMap,
        )};`,
        //bootstrapScripts: entryPoint,
        bootstrapModules: entryPoint,
        onShellReady() {
          res.statusCode = 200;
          res.setHeader('Content-type', 'text/html');
          pipe(res);
        },
        onShellError() {
          res.statusCode = 500;
          res.send('<!doctype html><p>Loading...</p>');
        },
      },
    );
  }


  @Version('1')
  @Get()
  @ApiOperation({ summary: 'Get Hello for v1' })
  @ApiResponse({ status: 200, description: 'Hello response for v1' })
  async getHellov1(@Res() res: any, @Req() req: any) {
    const text = await this.appService.getHellov1();
    return res.status(200).send({ message: text });
  }

  @Version('2')
  @Get()
  @ApiOperation({ summary: 'Get Hello for v2' })
  @ApiResponse({ status: 200, description: 'Hello response for v2' })
  async getHellov2(@Res() res: any, @Req() req: any) {
    const text = await this.appService.getHellov2();
    return res.status(200).send({ message: text });
  }
}
