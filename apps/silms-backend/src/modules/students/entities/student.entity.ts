import { Profile } from "@/modules/users/entities/profile.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    matricNo: string;

    @Column()
    department: string;

    @Column()
    programme: string;

    @Column()
    level: string;

    @OneToOne(() => Profile, profile => profile.student)
    @JoinColumn()
    profile: Profile;
}
