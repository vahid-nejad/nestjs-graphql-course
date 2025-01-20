import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';
import { IsEnum } from 'class-validator';
import { Role } from 'src/enums/role.enum';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsEnum(Role)
  @Field(() => Role)
  role: Role;
}
