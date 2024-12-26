import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Property } from './property.entity';

@Entity('property_image')
export class PropertyImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Property, (property) => property.images, {
    onDelete: 'CASCADE',
  })
  property: Property;

  @Column()
  propertyId: number;
}
