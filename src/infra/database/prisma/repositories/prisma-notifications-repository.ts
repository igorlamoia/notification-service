import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../app/entities/notification';
import { NotificationsRepository } from '../../../../app/repositories/notifications-repository';
import { PrismaService } from './../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    const { recipientId, content, category, readAt, createdAt, id } =
      notification;
    await this.prismaService.notification.create({
      data: {
        id,
        recipientId,
        content: content.value,
        category: category,
        readAt,
        createdAt,
      },
    });
  }
}
