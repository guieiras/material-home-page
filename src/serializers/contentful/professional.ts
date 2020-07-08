import { parseISO, compareDesc, formatISO } from 'date-fns';

import ProfessionalExperience from '../../interfaces/experience';
import { ContentfulEntries } from '../../services/contentful';
import { ContentfulFile } from '../contentful';

export default function ContentfulProfessionalSerializer(
  items: ContentfulEntries['content']['items'],
): ProfessionalExperience[] {
  const initialProfessionalExperiences: ProfessionalExperience[] = [];
  const sortedItems = items
    .map(({ fields }) => ({
      company: fields.company as string,
      companyImage: (fields.companyImage as ContentfulFile)?.fields?.file?.url,
      title: fields.title as string,
      jobDescription: fields.jobDescription as string,
      startDate: fields.startDate && parseISO(fields.startDate as string),
      endDate: fields.endDate && parseISO(fields.endDate as string),
    }))
    .sort((a, b) => compareDesc(a.endDate || new Date(), b.endDate || new Date()));

  return sortedItems.reduce((memo, fields, index) => {
    const job = {
      title: fields.title,
      jobDescription: fields.jobDescription,
      startDate: fields.startDate && formatISO(fields.startDate),
      endDate: fields.endDate && formatISO(fields.endDate),
    };

    if (index === 0 || memo[memo.length - 1].company !== fields.company) {
      return [
        ...memo,
        {
          company: fields.company,
          companyImage: fields.companyImage,
          jobs: [job],
        },
      ];
    }

    const [lastExperience, ...experiences] = [...memo.reverse()];
    return [
      ...experiences.reverse(),
      {
        ...lastExperience,
        jobs: [...lastExperience.jobs, job],
      },
    ];
  }, initialProfessionalExperiences);
}
