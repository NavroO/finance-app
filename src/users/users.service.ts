import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

    async findOne(
        userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }
}
