import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { SubscriptionPlan } from './subscription-plan.entity';
import { User } from './user.entity';

@Entity('subscriptions')
export class Subscriptions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paymentID: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => SubscriptionPlan, (plan) => plan.subscriptions)
  @JoinColumn()
  plan: SubscriptionPlan;

  @Column()
  planId: number;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.subscriptions)
  @JoinColumn()
  user: User;
}
