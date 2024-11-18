import { ICreateExperienceDTO } from '@modules/experience/dtos/ICreateExperienceDTO';
import { IUpdateExperienceDTO } from '@modules/experience/dtos/IUpdateExperienceDTO';
import { Experience } from '@modules/experience/entities/Experience';

interface IExperienceRepository {
  create(data: ICreateExperienceDTO): Promise<Experience>;
  findById(id: number): Promise<Experience>;
  list(): Promise<Experience[]>;
  delete(id: number): Promise<void>;
  update(id: number, data: IUpdateExperienceDTO): Promise<void>;
}

export { IExperienceRepository };
