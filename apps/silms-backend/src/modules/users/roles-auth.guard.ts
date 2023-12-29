import { UsersService } from "@/modules/users/services/users.service";
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
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
    }


    private extractTokenFromHeader (request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ')??[];
        return type === 'Bearer' ? token : undefined;
    }
}