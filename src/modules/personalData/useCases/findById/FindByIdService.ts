import { PersonalData } from '@modules/personalData/entities/PersonalData';
import { IPersonalDataRepository } from '@modules/personalData/repositories/interface/IPersonalDataRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindByIdService {
  constructor(
    @inject('PersonalDataRepository')
    private personalDataRepository: IPersonalDataRepository
  ) {}

  async execute(id: number): Promise<PersonalData> {
    const personalData = await this.personalDataRepository.findById(id);
    return personalData;
  }
}
