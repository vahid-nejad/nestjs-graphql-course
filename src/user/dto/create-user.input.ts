import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';
import { Role } from 'src/enums/role.enum';

@InputType()
export class CreateUserInput {
  @IsString()
  @Field()
  username: string;

  @IsString()
  @IsEmail()
  @Field()
  email: string;

  // @IsEnum(Role)
  // @Field(() => Role)
  // role: Role;

  @Field()
  @IsString()
  @MinLength(3)
  password: string;
}
