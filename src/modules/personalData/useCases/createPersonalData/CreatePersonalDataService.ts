import { ICreatePersonalDataDTO } from '@modules/personalData/dtos/ICreatePersonalDataDTO';
import { PersonalData } from '@modules/personalData/entities/PersonalData';
import { IPersonalDataRepository } from '@modules/personalData/repositories/interface/IPersonalDataRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreatePersonalDataService {
  constructor(
    @inject('PersonalDataRepository')
    private personalDataRepository: IPersonalDataRepository
  ) {}

  async execute(data: ICreatePersonalDataDTO): Promise<PersonalData> {
    const personalData = await this.personalDataRepository.create(data);
    return personalData;
  }
}
