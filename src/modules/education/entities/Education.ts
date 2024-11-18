import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("educations")
class Education{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    institution: string;

    @Column()
    course: string;

    @Column()
    degree: string;

    @Column()
    period: number;

}

export { Education }