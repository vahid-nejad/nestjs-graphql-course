import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Property } from './property.entity';

@Entity('property_type')
export class PropertyType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @OneToMany(() => Property, (property) => property.type)
  properties: Property[];
}
