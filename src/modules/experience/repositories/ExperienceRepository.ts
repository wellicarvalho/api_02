import { Repository } from 'typeorm';
import { IExperienceRepository } from './interface/IExperienceRepository';
import { AppDataSource } from '@database/data-source';
import { Experience } from '../entities/Experience';
import { ICreateExperienceDTO } from '../dtos/ICreateExperienceDTO';
import { IUpdateExperienceDTO } from '../dtos/IUpdateExperienceDTO';

export class ExperienceRepository implements IExperienceRepository {
  private repository: Repository<Experience>;

  constructor() {
    this.repository = AppDataSource.getRepository(Experience);
  }

  async create({
    title,
    description,
    company,
    position,
    location,
    start_date,
    end_date,
  }: ICreateExperienceDTO): Promise<Experience> {
    const experience = await this.repository.create({
      title,
      description,
      company,
      position,
      location,
      start_date,
      end_date,
    });

    await this.repository.save(experience);
    return experience;
  }

  async findById(id: number): Promise<Experience> {
    const experience = await this.repository.findOneBy({ id });
    return experience;
  }

  async list(): Promise<Experience[]> {
    const experiences = await this.repository.find();
    return experiences;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete({ id });
  }

  async update(id: number, data: IUpdateExperienceDTO): Promise<void> {
    const {
      title,
      description,
      company,
      location,
      position,
      start_date,
      end_date,
    } = data;
    const experience = await this.repository.findOneBy({ id });

    experience.title = title;
    experience.description = description;
    experience.company = company;
    experience.location = location;
    experience.position = position;
    experience.start_date = start_date;
    experience.end_date = end_date;

    await this.repository.save(experience);
  }
}
