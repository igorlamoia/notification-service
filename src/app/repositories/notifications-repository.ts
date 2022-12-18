import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  // abstract save(notification: Notification): Promise<void>;
  // abstract find(recipientId: string): Promise<Notification[]>;
  // abstract delete(notification: Notification): Promise<void>;
}
