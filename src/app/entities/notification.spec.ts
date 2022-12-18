import { Content } from './content';
import { Notification } from './notification';

describe('Notification body', () => {
  it('should be valid', () => {
    const content = new Notification({
      // id: 'example-id',
      recipientId: 'exemple-recipent-id',
      content: new Content('Feliz aniverário meu amigo!'),
      category: 'birthday',
    });

    expect(content).toHaveProperty('createdAt');
  });
});
