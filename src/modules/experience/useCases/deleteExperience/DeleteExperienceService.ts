import { IExperienceRepository } from '@modules/experience/repositories/interface/IExperienceRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteExperienceService {
  constructor(
    @inject('ExperienceRepository')
    private experienceRepository: IExperienceRepository
  ) {}

  async execute(id: number) {
    await this.experienceRepository.delete(id);
  }
}
