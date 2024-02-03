import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { Auth } from '../auth/entities/auth.entity';

require('dotenv').config();

export const emailIconsPath = join(
  __dirname,
  '../../../src/modules/mail/attachments',
);

export const emailAttachments = [
  {
    filename: 'wisr_logo.png',
    path: `${emailIconsPath}/wisr_logo.png`,
    cid: 'companyLogo',
  },
  {
    filename: 'twitterIcon.png',
    path: `${emailIconsPath}/twitterIcon.png`,
    cid: 'twitterLogo',
  },
  {
    filename: 'discordIcon.png',
    path: `${emailIconsPath}/discordIcon.png`,
    cid: 'discordLogo',
  },
  {
    filename: 'telegramIcon.png',
    path: `${emailIconsPath}/telegramIcon.png`,
    cid: 'telegramLogo',
  },
  {
    filename: 'linkedInLogo.png',
    path: `${emailIconsPath}/linkedInLogo.png`,
    cid: 'linkedInLogo',
  },
  {
    filename: 'hashNodeLogo.png',
    path: `${emailIconsPath}/hashNodeLogo.png`,
    cid: 'hashNodeLogo',
  },
  {
    filename: 'youtubeLogo.png',
    path: `${emailIconsPath}/youtubeLogo.png`,
    cid: 'youtubeLogo',
  },
];

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  async sendUserVerificationEmail(
    auth: Auth,
    emailToken: string,
  ): Promise<void> {
    const url = `${this.configService.get(
      'SERVER_URL',
    )}/backend/auth/verify-account/${emailToken}`;

    const confirmationTemplate = {
      from: process.env.EMAIL_USER,
      subject: 'Verify Your Email Address For Wisr',
      context: {
        url: url,
      },
      attachments: [...emailAttachments],
    };

    const msg = {
      to: auth.email,
      ...confirmationTemplate,
    };

    await this.sendEmailVerificationMail(msg);
  }

  async sendEmailVerificationMail(options: ISendMailOptions): Promise<void> {
    try {
      return await this.mailerService.sendMail({
        to: options.to,
        subject: options.subject,
        text: options.text,
        template: 'emailVerification',
        context: options.context,
        attachments: options.attachments,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async sendResetPassword(auth: Auth, emailToken: string): Promise<void> {
    const url = `http://localhost:3000/backend/auth/confirm-reset-password/${emailToken}`;

    const confirmationTemplate = {
      from: process.env.EMAIL_USER,
      subject: 'Password Reset Request',
      context: {
        email: auth.email,
        name: `${auth.user.firstName} ${auth.user.lastName}`,
        url: url,
      },
      attachments: [...emailAttachments],
    };

    const msg = {
      to: auth.email,
      ...confirmationTemplate,
    };

    await this.sendUpdatePasswordMail(msg)
  }

  async sendUpdatePasswordMail(options: ISendMailOptions): Promise<void> {
    try {
      console.log(options)
      return await this.mailerService.sendMail({
        from: process.env.EMAIL_USER,
        to: options.to,
        subject: options.subject,
        text: options.text,
        template: 'updatePassword',
        context: options.context,
        attachments: options.attachments,

      }).then((r) => {
        console.log(r.from)
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
