import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty({ message: 'recipientId é obrigatório' })
  @IsUUID(4, { message: 'recipientId deve ser um UUID válido da v4  ' })
  recipientId: string;

  @IsNotEmpty({ message: 'content é obrigatório' })
  @Length(5, 240, { message: 'Content deve ter entre 5 e 240 caracteres' })
  content: string;

  @IsNotEmpty({ message: 'category é obrigatório' })
  category: string;
}
