import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListExperienceService } from './ListExperienceService';

export class ListExperienceController {
  async handle(req: Request, res: Response): Promise<void> {
    const listExperienceService = container.resolve(ListExperienceService);

    const experiences = await listExperienceService.execute();
    res.status(200).json(experiences);
  }
}
