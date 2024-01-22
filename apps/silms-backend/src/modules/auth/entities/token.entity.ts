import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Token {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true})
    token: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}