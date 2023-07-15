import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Tienda {
        @PrimaryGeneratedColumn()
        id: number;
      
        @Column()
        smartphone_name: string;
        
        @Column()
        model: string;
        
        @Column()
        reference_price: number;
        
        @Column()
        selling_price: number;
        
        @Column()
        model_year: number;
        
        @Column({ default: () => "CURRENT_TIMESTAMP" })
        created_at: Date;
        
        @Column({ default: () => "CURRENT_TIMESTAMP" })
        updated_at: Date;
        }

