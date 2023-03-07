import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PrismaService } from 'src/db/prisma.service';


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    async validateUser(username: any, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
