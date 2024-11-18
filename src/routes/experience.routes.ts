import { CreateExperienceController } from '@modules/experience/useCases/createExperience/CreateExperienceController';
import { DeleteExperienceController } from '@modules/experience/useCases/deleteExperience/DeleteExperienceController';
import { FindByIdController } from '@modules/experience/useCases/findById/FindByIdController';
import { ListExperienceController } from '@modules/experience/useCases/listExperience/ListExperienceController';
import { UpdateExperienceController } from '@modules/experience/useCases/updateExperience/UpdateExperienceController';
import { Router } from 'express';

export const experienceRoutes = Router();

const createExperienceController = new CreateExperienceController();
const listExperienceController = new ListExperienceController();
const findByIdController = new FindByIdController();
const deleteExperienceController = new DeleteExperienceController();
const updateExperienceController = new UpdateExperienceController();

experienceRoutes.post('/', createExperienceController.handle);
experienceRoutes.get('/', listExperienceController.handle);
experienceRoutes.get('/:id', findByIdController.handle);
experienceRoutes.put('/:id', updateExperienceController.handle);
experienceRoutes.delete('/:id', deleteExperienceController.handle);
