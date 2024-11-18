import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('experiences')
class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  company: string;

  @Column()
  position: string;

  @Column()
  location: string;

  @Column()
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;
}

export { Experience };
