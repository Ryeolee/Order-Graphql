import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
@InputType()
export class UserCreateDto {
  @Field()
  @IsString()
  nickname: string;

  public getNickname() {
    return this.nickname;
  }
}
