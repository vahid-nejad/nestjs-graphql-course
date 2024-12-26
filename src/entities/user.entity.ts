import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Property } from './property.entity';
import { Subscriptions } from './subscription.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Property, (property) => property.user)
  properties: Property[];

  @OneToMany(() => Subscriptions, (subscription) => subscription.user)
  subscriptions: Subscriptions[];
}
