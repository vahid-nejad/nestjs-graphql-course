import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { PropertyType } from './property-type.entity';
import { Contact } from './contact.entity';
import { PropertyFeature } from './property-feature.entity';
import { PropertyLocation } from './property-location.entity';
import { PropertyStatus } from './property-status.entity';
import { PropertyImage } from './propertyImage.entity';

@Entity('property')
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.properties)
  user: User;

  @Column()
  typeId: number;

  @ManyToOne(() => PropertyType, (type) => type.properties)
  type: PropertyType;

  @Column()
  statusId: number;

  @ManyToOne(() => PropertyStatus, (status) => status.properties)
  status: PropertyStatus;

  @OneToOne(() => PropertyLocation, (location) => location.property, {
    cascade: true,
  })
  @JoinColumn()
  location: PropertyLocation;

  @OneToOne(() => PropertyFeature, (feature) => feature.property, {
    cascade: true,
  })
  @JoinColumn()
  feature: PropertyFeature;

  @OneToMany(() => PropertyImage, (image) => image.property, { cascade: true })
  images: PropertyImage[];

  @OneToOne(() => Contact, (contact) => contact.property, { cascade: true })
  @JoinColumn()
  contact: Contact;
}
