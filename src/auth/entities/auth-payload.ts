import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/enums/role.enum';

@ObjectType()
export class AuthPayload {
  @Field(() => Int)
  userId: number;

  @Field(() => Role)
  role: Role;

  @Field()
  accessToken: string;
}
