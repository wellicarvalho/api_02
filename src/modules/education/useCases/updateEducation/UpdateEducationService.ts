import { IUpdateEducationDTO } from '@modules/education/dtos/IUpdateEducationDTO';
import { IEducationRepository } from '@modules/education/repositories/interface/IEducationRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UpdateEducationService {
  constructor(
    @inject('EducationRepository')
    private educationRepository: IEducationRepository
  ) {}

  async execute(
    id: number,
    { institution, course, degree, period }: IUpdateEducationDTO
  ): Promise<void> {
    await this.educationRepository.update(id, {
      institution,
      course,
      degree,
      period,
    });
  }
}
