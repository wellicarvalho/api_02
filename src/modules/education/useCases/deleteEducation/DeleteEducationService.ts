import { IEducationRepository } from '@modules/education/repositories/interface/IEducationRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteEducationService {
  constructor(
    @inject('EducationRepository')
    private educationRepository: IEducationRepository
  ) {}

  async execute(id: number) {
    await this.educationRepository.delete(id);
  }
}
