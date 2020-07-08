import Skill from '../../interfaces/skill';
import SkillGroup from '../../interfaces/skillGroup';
import { ContentfulEntries } from '../../services/contentful';

export default function ContentfulSkillSerializer(items: ContentfulEntries['content']['items']): SkillGroup[] {
  const skillGroups: Record<string, SkillGroup> = {};

  items
    .sort((a, b) => (a.fields.skill > b.fields.skill ? 1 : a.fields.skill < b.fields.skill ? -1 : 0))
    .forEach(({ fields }) => {
      const group = fields.group as ContentfulEntries['content']['items'][0];
      skillGroups[group.sys.id as string] = skillGroups[group.sys.id as string] || {
        name: group.fields.name as string,
        order: group.fields.order as number,
        skills: [],
      };

      skillGroups[group.sys.id as string].skills.push({
        name: fields.skill as string,
        tags: fields.tags as Skill['tags'],
      });
    });

  return Object.values(skillGroups).sort((a, b) => a.order - b.order);
}
