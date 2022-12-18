import { Module } from '@nestjs/common';
import { NotificationsRepository } from '../../app/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository], // só o nome do provider, n precisa do useClass
})
export class DatabaseModule {}
