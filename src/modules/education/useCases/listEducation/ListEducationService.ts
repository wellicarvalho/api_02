import { Education } from '@modules/education/entities/Education';
import { IEducationRepository } from '@modules/education/repositories/interface/IEducationRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListEducationService {
  constructor(
    @inject('EducationRepository')
    private educationRepository: IEducationRepository
  ) {}

  async execute(): Promise<Education[]> {
    const educations = await this.educationRepository.list();
    return educations;
  }
}
