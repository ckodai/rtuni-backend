import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SysuserService } from '../services/Sysuser.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private sysUserService: SysuserService
    ) {}

    async validateUser(usernane: string, pass: string): Promise<any> {
        const user = await this.sysUserService.findOne(usernane);
        if(user && user.Password == pass){
            const { Password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.Username, sub: user.IdSysUser };
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}