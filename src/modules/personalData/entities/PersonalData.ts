import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('personal_data')
class PersonalData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  address_street: string;

  @Column()
  address_city: string;

  @Column()
  address_state: string;

  @Column()
  address_country: string;

  @Column()
  address_number: string;

  @Column()
  address_zip: string;

  @Column()
  linkedin_link: string;

  @Column()
  github_link: string;

  @Column()
  about: string;
}

export { PersonalData };
