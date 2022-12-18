import { Content } from './content';

describe('Content of notification', () => {
  it('should be equal', () => {
    const content = new Content('Feliz aniverário meu amigo!');
    expect(content.value).toEqual('Feliz aniverário meu amigo!');
  });
  it('should not be valid with less then 5 or more then 255 characters', () => {
    expect(() => new Content('a'.repeat(256))).toThrow();
    expect(() => new Content('a'.repeat(4))).toThrow();
  });
});
