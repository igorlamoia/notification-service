import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '../../../app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post('send-notification')
  async saveNotification(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification };
  }
}
