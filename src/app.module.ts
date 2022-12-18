import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { HttpModule } from './infra/http.module';
import { NotificationService } from './infra/notification.service';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [PrismaService, NotificationService],
})
export class AppModule {}
