import { CreatePersonalDataController } from '@modules/personalData/useCases/createPersonalData/CreatePersonalDataController';
import { DeletePersonalDataController } from '@modules/personalData/useCases/deletePersonalData/DeletePersonalDataController';
import { FindByIdController } from '@modules/personalData/useCases/findById/FindByIdController';
import { ListPersonalDataController } from '@modules/personalData/useCases/listPersonalData/ListPersonalDataController';
import { UpdatePersonalDataController } from '@modules/personalData/useCases/updatePersonalData/UpdatePersonalDataController';
import { Router } from 'express';

export const personalDataRoutes = Router();

const createPersonalDataController = new CreatePersonalDataController();
const updatePersonalDataController = new UpdatePersonalDataController();
const findByIdController = new FindByIdController();
const listPersonalDataController = new ListPersonalDataController();
const deletePersonalDataController = new DeletePersonalDataController();

personalDataRoutes.post('/', createPersonalDataController.handle);
personalDataRoutes.put('/:id', updatePersonalDataController.handle);
personalDataRoutes.get('/', listPersonalDataController.handle);
personalDataRoutes.get('/:id', findByIdController.handle);
personalDataRoutes.delete('/:id', deletePersonalDataController.handle);
