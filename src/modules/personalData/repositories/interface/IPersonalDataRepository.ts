import { ICreatePersonalDataDTO } from '@modules/personalData/dtos/ICreatePersonalDataDTO';
import { IUpdatePersonalDataDTO } from '@modules/personalData/dtos/IUpdatePersonalDataDTO';
import { PersonalData } from '@modules/personalData/entities/PersonalData';

export interface IPersonalDataRepository {
  create(data: ICreatePersonalDataDTO): Promise<PersonalData>;
  findById(id: number): Promise<PersonalData>;
  list(): Promise<PersonalData[]>;
  delete(id: number): Promise<void>;
  update(id: number, data: IUpdatePersonalDataDTO): Promise<void>;
}
