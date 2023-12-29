import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor (private mailerService:  MailerService){}

    async sendResetPassword (user: User, token: string) {
        const url = `localhost:3000/backend/auth/confirm-reset-password/${token}`;

        await this.mailerService.sendMail({
            to: user.email,
            // from: '"Support Team" <support@example.com>', // override default from
            subject: "Password reset url",
            template: "./confirmation",
            context: {
                name: `${user.profile} ${user.profile}`,
                url,
            },
        });
    }
}
