import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity('property_location')
export class PropertyLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  streetAddress: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @Column()
  region: string;

  @Column()
  landmark: string;

  @OneToOne(() => Property, (property) => property.location, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  property: Property;

  @Column()
  propertyId: number;
}
