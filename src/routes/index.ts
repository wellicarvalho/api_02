import { Router } from 'express';
import { educationRoutes } from './education.routes';
import { experienceRoutes } from './experience.routes';
import { personalDataRoutes } from './personalData.routes';

export const routes = Router();

routes.use('/api/education', educationRoutes);
routes.use('/api/experience', experienceRoutes);
routes.use('/api/personalData', personalDataRoutes);
