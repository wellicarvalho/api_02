import { CreateEducationController } from '@modules/education/useCases/createEducation/CreateEducationController';
import { DeleteEducationController } from '@modules/education/useCases/deleteEducation/DeleteEducationController';
import { FindByIdController } from '@modules/education/useCases/findById/FindByIdController';
import { ListEducationController } from '@modules/education/useCases/listEducation/ListEducationController';
import { UpdateEducationController } from '@modules/education/useCases/updateEducation/UpdateEducationController';
import { Router } from 'express';

export const educationRoutes = Router();

const createEducationController = new CreateEducationController();
const listEducationController = new ListEducationController();
const findByIdController = new FindByIdController();
const deleteEducationController = new DeleteEducationController();
const updateEducationController = new UpdateEducationController();

educationRoutes.post('/', createEducationController.handle);
educationRoutes.get('/', listEducationController.handle);
educationRoutes.get('/:id', findByIdController.handle);
educationRoutes.delete('/:id', deleteEducationController.handle);
educationRoutes.put('/:id', updateEducationController.handle);
