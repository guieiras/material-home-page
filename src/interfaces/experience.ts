export interface ProfessionalExperienceJob {
  title: string;
  jobDescription: string;
  startDate?: string;
  endDate?: string;
}
export default interface ProfessionalExperience {
  company: string;
  companyImage: string;
  jobs: ProfessionalExperienceJob[];
}
