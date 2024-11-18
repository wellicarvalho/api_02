import { Repository } from "typeorm";
import { ICreateEducationDTO } from "../dtos/ICreateEducationDTO";
import { IEducationRepository } from "./interface/IEducationRepository";
import { Education } from "../entities/Education";
import { AppDataSource } from "@database/data-source";
import { IUpdateEducationDTO } from "../dtos/IUpdateEducationDTO";

export class EducationRepository implements IEducationRepository{
    private repository: Repository<Education>;

    constructor(){
        this.repository = AppDataSource.getRepository(Education);
    }

    async create({ institution, course, degree, period }: ICreateEducationDTO): Promise<Education> {
        const education = await this.repository.create({
            institution,
            course,
            degree,
            period,
        });

        await this.repository.save(education);
        return education;
    }

    async findById(id: number): Promise<Education> {
        const education = await this.repository.findOneBy({id});
        return education;
    }

    async list(): Promise<Education[]> {
        const educations = await this.repository.find();
        return educations;
    }

    async delete(id: number): Promise<void>{
        await this.repository.delete({id});
    }

    async update(id: number, data: IUpdateEducationDTO): Promise<void> {
        const { institution, course, degree, period } = data;
        const education = await this.repository.findOneBy({id});

        education.institution = institution;
        education.course = course;
        education.degree = degree;
        education.period = period;

        await this.repository.save(education);
    }
}