import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity('property_feature')
export class PropertyFeature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  parkingSpots: number;

  @Column()
  area: number;

  @Column()
  hasSwimmingPool: boolean;

  @Column()
  hasGardenYard: boolean;

  @Column()
  hasBalcony: boolean;

  @OneToOne(() => Property, (property) => property.feature, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  property: Property;

  @Column()
  propertyId: number;
}
