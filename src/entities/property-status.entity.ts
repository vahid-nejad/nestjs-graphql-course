import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Property } from './property.entity';

@Entity('property_status')
export class PropertyStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @OneToMany(() => Property, (property) => property.status)
  properties: Property[];
}
