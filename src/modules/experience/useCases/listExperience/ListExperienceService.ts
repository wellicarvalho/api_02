import { Experience } from '@modules/experience/entities/Experience';
import { IExperienceRepository } from '@modules/experience/repositories/interface/IExperienceRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListExperienceService {
  constructor(
    @inject('ExperienceRepository')
    private experienceRepository: IExperienceRepository
  ) {}

  async execute(): Promise<Experience[]> {
    const experiences = await this.experienceRepository.list();
    return experiences;
  }
}
