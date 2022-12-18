import { Notification } from 'src/app/entities/notification';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';

export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  public async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  // public async findByRecipientId(recipientId: string): Promise<Notification[]> {
  //   return this.notifications.filter(
  //     (notification) => notification.recipientId === recipientId,
  //   );
  // }
}
