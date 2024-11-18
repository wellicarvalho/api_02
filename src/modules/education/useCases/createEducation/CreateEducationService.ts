import { inject, injectable } from "tsyringe";
import { ICreateEducationDTO } from "../../dtos/ICreateEducationDTO";
import { Education } from "../../entities/Education";
import { IEducationRepository } from "../../repositories/interface/IEducationRepository";

@injectable()
export class CreateEducationService{
    constructor(
        @inject("EducationRepository")
        private educationRepository: IEducationRepository
    ){}

    async execute({institution, course, degree, period}: ICreateEducationDTO): Promise<Education>{

        const education = await this.educationRepository.create({
            institution,
            course,
            degree,
            period,
        });
        return education;
    }
}