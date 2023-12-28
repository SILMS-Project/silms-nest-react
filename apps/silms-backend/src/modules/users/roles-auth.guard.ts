import { UsersService } from "@/modules/users/services/users.service";
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Request } from 'express';
import { Roles } from "../auth/guards/roles.decorator";


@Injectable()
export class RolesGuard implements CanActivate {
    constructor (
         private usersService: UsersService,
         private reflector: Reflector
         ) {}
    
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const roles = this.reflector.get(Roles, context.getHandler());

        if (!roles) {
            return true;
        }
        console.log(roles);
        const user = await this.usersService.findOneById(request.user.id);
        return roles[0] === user.role;

        // try {
        //     const payload = await this.jwtService.verifyAsync(
        //         token,
        //         {
        //             secret: process.env.JWT_SECRET
        //         }
        //     );
            
        //     const user = await this.usersService.findOneById(payload.sub);
        //     request['user'] = payload;
        //     return roles[0] === user.role;
        // } catch {
        //     throw new UnauthorizedException();
        // }

        // return true;
    }


    private extractTokenFromHeader (request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ')??[];
        return type === 'Bearer' ? token : undefined;
    }
}