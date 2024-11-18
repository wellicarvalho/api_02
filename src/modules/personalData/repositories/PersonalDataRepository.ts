import { Repository } from 'typeorm';
import { ICreatePersonalDataDTO } from '../dtos/ICreatePersonalDataDTO';
import { IUpdatePersonalDataDTO } from '../dtos/IUpdatePersonalDataDTO';
import { PersonalData } from '../entities/PersonalData';
import { IPersonalDataRepository } from './interface/IPersonalDataRepository';
import { AppDataSource } from '@database/data-source';

export class PersonalDataRepository implements IPersonalDataRepository {
  private repository: Repository<PersonalData>;

  constructor() {
    this.repository = AppDataSource.getRepository(PersonalData);
  }

  async create(data: ICreatePersonalDataDTO): Promise<PersonalData> {
    const personalData = await this.repository.create(data);
    await this.repository.save(personalData);
    return personalData;
  }
  async findById(id: number): Promise<PersonalData> {
    const personalData = await this.repository.findOneBy({ id });
    return personalData;
  }
  async list(): Promise<PersonalData[]> {
    const personalDatas = await this.repository.find();
    return personalDatas;
  }
  async delete(id: number): Promise<void> {
    await this.repository.delete({ id });
  }
  async update(id: number, data: IUpdatePersonalDataDTO): Promise<void> {
    const personalData = await this.repository.findOneBy({ id });

    personalData.name = data.name;
    personalData.email = data.email;
    personalData.phone = data.phone;
    personalData.address_street = data.address_street;
    personalData.address_number = data.address_number;
    personalData.address_city = data.address_city;
    personalData.address_country = data.address_country;
    personalData.address_state = data.address_state;
    personalData.address_zip = data.address_zip;
    personalData.github_link = data.github_link;
    personalData.linkedin_link = data.linkedin_link;
    personalData.about = data.about;

    await this.repository.save(personalData);
  }
}
