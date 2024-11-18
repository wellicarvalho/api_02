import "dotenv/config";
import { Education } from '@modules/education/entities/Education';
import { Experience } from '@modules/experience/entities/Experience';
import { PersonalData } from '@modules/personalData/entities/PersonalData';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  entities: [Education, Experience, PersonalData],
  //subscribers: [],
  migrations: ['./dist/database/migrations/*js'],
});
