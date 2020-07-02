export interface ProfessionalExperienceJob {
  title: string;
  jobDescription: string;
  startDate?: Date;
  endDate?: Date;
}
export default interface ProfessionalExperience {
  company: string;
  companyImage: string;
  jobs: ProfessionalExperienceJob[];
}
