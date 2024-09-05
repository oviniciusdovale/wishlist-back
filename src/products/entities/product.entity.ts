import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  code: string;

  @Column({ nullable: true })
  name: string;

  @Column({ default: true })
  available: boolean;

  @Column({ default: true })
  visible: boolean;

  @Column({ type: 'json', nullable: true })
  details: {
    name: string;
    description: string;
  };

  @Column({ nullable: true })
  fullPriceInCents: string;

  @Column({ nullable: true })
  salePriceInCents: string;

  @Column({ nullable: true })
  rating: number;

  @Column({ nullable: true })
  image: string;

  @Column({ default: true })
  stockAvailable: boolean;
}
