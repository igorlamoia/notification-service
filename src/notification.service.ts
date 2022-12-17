import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

interface Notification {
  id: string;
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
}

@Injectable()
export class NotificationService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllNotifications() {
    return this.prismaService.notification.findMany();
  }

  async saveNotification({
    id,
    recipientId,
    content,
    category,
    readAt,
  }: Notification) {
    return this.prismaService.notification.create({
      data: {
        id,
        recipientId,
        content,
        category,
        readAt,
      },
    });
  }
}
