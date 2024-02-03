import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { transports, format } from 'winston';
import 'winston-daily-rotate-file';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new transports.DailyRotateFile({
          filename: `logs/%DATE%-error.log`,
          level: 'error',
          format: format.combine(format.timestamp(), format.json()),
          datePattern: 'YYYY-MM-DD',
          zippedArchive: false,
          maxFiles: '30d',
        }),
        new transports.DailyRotateFile({
          filename: `logs/%DATE%-combined.log`,
          format: format.combine(format.timestamp(), format.json()),
          datePattern: 'YYYY-MM-DD',
          zippedArchive: false,
          maxFiles: '30d',
        }),
        new transports.Console({
          format: format.combine(
            format.cli(),
            format.splat(),
            format.timestamp(),
            format.printf((info) => {
              return `${info.timestamp} ${info.level}: ${info.message}`;
            }),
          ),
        }),
      ],
    }),
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle(process.env.APP_NAME)
    .setDescription(process.env.APP_DESCRIPTION)
    .setVersion(process.env.API_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    ignoreGlobalPrefix: false,
  });

  // app.enableCors({ origin: [allowed] });
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix('/backend');

  app.enableVersioning({
    type: VersioningType.URI,
  });

  try {
    SwaggerModule.setup('/api', app, document, {
      swaggerOptions: {
        baseUrl: '/backend/v1',
      },
    });
  } catch (error) {
    this.logger.error(error);
  }

  //const localesPath = join(__dirname, '../../../../', 'demo-backend','src','locales');

  /*i18next
    
    .use(i18nextMiddleware.LanguageDetector)
    //@ts-ignore
    .use(Backend)
    .init({
      debug: false,
      preload: ['en', 'en-US', 'fr'],
      ns: ['public', 'adm'],
      defaultNS: 'public',
      backend: {
        loadPath: `${localesPath}/{{lng}}/{{ns}}.json`,
        addPath: `${localesPath}/{{lng}}/{{ns}}.missing.json`,
      }
    }//, (err, t) => {
      // init set content
      //console.log(t);
      //console.log(err);
      // console.log('INIT DONE');}
    );
*/

  /* //expose the underlying http server
    const httpInstance = app.getHttpAdapter().getInstance();
  
    httpInstance.use(
      //@ts-ignore
      i18nextMiddleware.handle(i18next, {
        //ignoreRoutes: [], // or function(req, res, options, i18next) // return true to ignore 
        removeLngFromUrl: false // removes the language from the url when language detected in path
      })
    )
  */

  await app.listen(
    process.env.APP_SERVER_LISTEN_PORT,
    process.env.APP_SERVER_LISTEN_IP,
  );

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
