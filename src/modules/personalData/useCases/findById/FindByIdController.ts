import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindByIdService } from './FindByIdService';

export class FindByIdController {
  async handle(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const findByIdService = container.resolve(FindByIdService);
    const experience = await findByIdService.execute(Number(id));

    res.status(200).json(experience);
  }
}
