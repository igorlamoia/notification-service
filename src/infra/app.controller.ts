import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';
import { NotificationService } from './notification.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly notificationService: NotificationService,
  ) {}

  @Get('get-notifications')
  getNotifications() {
    return this.notificationService.getAllNotifications();
  }

  @Post('send-notification')
  async saveNotification(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    return this.notificationService.saveNotification({
      id: randomUUID(),
      content,
      category,
      recipientId,
    });
  }
}
