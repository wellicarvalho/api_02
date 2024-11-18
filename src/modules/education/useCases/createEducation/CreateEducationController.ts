import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateEducationService } from "./CreateEducationService";

export class CreateEducationController{
    async handle(req: Request, res: Response): Promise<void>{
        const { institution, course, degree, period } = req.body;

        const createEducationService = container.resolve(CreateEducationService);
        const education = await createEducationService.execute({
            institution,
            course,
            degree,
            period
        });
        res.status(201).json(education);
    }
}