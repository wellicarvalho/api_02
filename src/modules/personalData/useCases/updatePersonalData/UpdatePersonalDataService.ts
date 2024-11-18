import { IUpdatePersonalDataDTO } from '@modules/personalData/dtos/IUpdatePersonalDataDTO';
import { IPersonalDataRepository } from '@modules/personalData/repositories/interface/IPersonalDataRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UpdatePersonalDataService {
  constructor(
    @inject('PersonalDataRepository')
    private personalDataRepository: IPersonalDataRepository
  ) {}

  async execute(id: number, data: IUpdatePersonalDataDTO): Promise<void> {
    await this.personalDataRepository.update(id, data);
  }
}
