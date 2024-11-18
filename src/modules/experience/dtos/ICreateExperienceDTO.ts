export interface ICreateExperienceDTO {
  title: string;
  description: string;
  company: string;
  position: string;
  location: string;
  start_date: Date;
  end_date?: Date;
}
