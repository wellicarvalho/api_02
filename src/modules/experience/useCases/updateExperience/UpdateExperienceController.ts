import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateExperienceService } from './UpdateExperienceService';

export class UpdateExperienceController {
  async handle(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const {
      title,
      description,
      company,
      position,
      location,
      start_date,
      end_date,
    } = req.body;
    const updateExperienceService = container.resolve(UpdateExperienceService);

    await updateExperienceService.execute(Number(id), {
      title,
      description,
      company,
      position,
      location,
      start_date,
      end_date,
    });

    res.status(204).send();
  }
}
