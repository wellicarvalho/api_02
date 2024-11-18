import { ICreateExperienceDTO } from '@modules/experience/dtos/ICreateExperienceDTO';
import { Experience } from '@modules/experience/entities/Experience';
import { IExperienceRepository } from '@modules/experience/repositories/interface/IExperienceRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateExperienceService {
  constructor(
    @inject('ExperienceRepository')
    private experienceRepository: IExperienceRepository
  ) {}

  async execute({
    title,
    description,
    company,
    position,
    location,
    start_date,
    end_date,
  }: ICreateExperienceDTO): Promise<Experience> {
    const experience = await this.experienceRepository.create({
      title,
      description,
      company,
      position,
      location,
      start_date,
      end_date,
    });
    return experience;
  }
}
