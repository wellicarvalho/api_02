import { container } from "tsyringe";
import { Request, Response } from "express";
import { ListEducationService } from "./ListEducationService";

export class ListEducationController{
    async handle(req: Request, res: Response): Promise<void>{
        const listEducationService = container.resolve(ListEducationService);

        const educations = await listEducationService.execute();
        res.status(200).json(educations);
    }
}