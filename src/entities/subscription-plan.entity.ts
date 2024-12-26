import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Subscriptions } from './subscription.entity';

@Entity('subscription_plan')
export class SubscriptionPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float')
  price: number;

  @Column()
  propertyLimit: number;

  @Column()
  imagePerPropertyLimit: number;

  @Column()
  features: string;

  @OneToMany(() => Subscriptions, (subscription) => subscription.plan)
  subscriptions: Subscriptions[];
}
