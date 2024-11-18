import { container } from "tsyringe";
import { IEducationRepository } from "@modules/education/repositories/interface/IEducationRepository";
import { IExperienceRepository } from "@modules/experience/repositories/interface/IExperienceRepository";
import { IPersonalDataRepository } from "@modules/personalData/repositories/interface/IPersonalDataRepository";
import { EducationRepository } from "@modules/education/repositories/EducationRepository";
import { ExperienceRepository } from "@modules/experience/repositories/ExperienceRepository";
import { PersonalDataRepository } from "@modules/personalData/repositories/PersonalDataRepository";

container.registerSingleton<IEducationRepository>(
  'EducationRepository',
  EducationRepository
);

container.registerSingleton<IExperienceRepository>(
  'ExperienceRepository',
  ExperienceRepository
);

container.registerSingleton<IPersonalDataRepository>(
  'PersonalDataRepository',
  PersonalDataRepository
);
