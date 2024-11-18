import { Education } from '@modules/education/entities/Education';
import { IEducationRepository } from '@modules/education/repositories/interface/IEducationRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindByIdService {
  constructor(
    @inject('EducationRepository')
    private educationRepository: IEducationRepository
  ) {}

  async execute(id: number): Promise<Education> {
    const education = await this.educationRepository.findById(id);
    return education;
  }
}
