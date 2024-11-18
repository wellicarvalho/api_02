import { PersonalData } from '@modules/personalData/entities/PersonalData';
import { IPersonalDataRepository } from '@modules/personalData/repositories/interface/IPersonalDataRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListPersonalDataService {
  constructor(
    @inject('PersonalDataRepository')
    private personalDataRepository: IPersonalDataRepository
  ) {}

  async execute(): Promise<PersonalData[]> {
    const personalDatas = await this.personalDataRepository.list();
    return personalDatas;
  }
}
