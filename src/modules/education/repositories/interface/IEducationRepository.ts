import { ICreateEducationDTO } from "@modules/education/dtos/ICreateEducationDTO";
import { IUpdateEducationDTO } from "@modules/education/dtos/IUpdateEducationDTO";
import { Education } from "@modules/education/entities/Education";

interface IEducationRepository {
    create(data: ICreateEducationDTO): Promise<Education>;
    findById(id: number): Promise<Education>;
    list(): Promise<Education[]>;
    delete(id: number): Promise<void>;
    update(id: number, data: IUpdateEducationDTO): Promise<void>;
}

export { IEducationRepository }