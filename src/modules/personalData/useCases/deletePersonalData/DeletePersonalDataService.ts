import { IPersonalDataRepository } from '@modules/personalData/repositories/interface/IPersonalDataRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeletePersonalDataService {
  constructor(
    @inject('PersonalDataRepository')
    private personalDataRepository: IPersonalDataRepository
  ) {}

  async execute(id: number) {
    await this.personalDataRepository.delete(id);
  }
}
