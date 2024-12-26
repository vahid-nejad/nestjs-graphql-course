import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity('contact')
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToOne(() => Property, (property) => property.contact, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  property: Property;

  @Column()
  propertyId: number;
}
