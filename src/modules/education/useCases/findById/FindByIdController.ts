import { container } from "tsyringe";
import { Request, Response } from "express";
import { FindByIdService } from "./FindByIdService";

export class FindByIdController {
    async handle(req: Request, res: Response): Promise<void>{
        const {id} = req.params;

        const findByIdService = container.resolve(FindByIdService);
        const education = await findByIdService.execute(Number(id));

        res.status(200).json(education);
    }
}