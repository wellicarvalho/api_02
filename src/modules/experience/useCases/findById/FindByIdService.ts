import { Experience } from '@modules/experience/entities/Experience';
import { IExperienceRepository } from '@modules/experience/repositories/interface/IExperienceRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindByIdService {
  constructor(
    @inject('ExperienceRepository')
    private experienceRepository: IExperienceRepository
  ) {}

  async execute(id: number): Promise<Experience> {
    const education = await this.experienceRepository.findById(id);
    return education;
  }
}
