import { IUpdateExperienceDTO } from '@modules/experience/dtos/IUpdateExperienceDTO';
import { IExperienceRepository } from '@modules/experience/repositories/interface/IExperienceRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UpdateExperienceService {
  constructor(
    @inject('ExperienceRepository')
    private experienceRepository: IExperienceRepository
  ) {}

  async execute(
    id: number,
    {
      title,
      description,
      company,
      position,
      location,
      start_date,
      end_date,
    }: IUpdateExperienceDTO
  ): Promise<void> {
    await this.experienceRepository.update(id, {
      title,
      description,
      company,
      position,
      location,
      start_date,
      end_date,
    });
  }
}
