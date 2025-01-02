import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Profile {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  bio: string;

  @Field()
  @Column()
  avatar: string;

  @Field(() => User)
  @OneToOne(() => User, (user) => user.profile)
  user: Promise<User>;
}
