import { colors } from '@mui/material'
import Chip from '@mui/material/Chip';
import React from 'react';

import { useI18n } from '../../i18n';
import Skill from '../../interfaces/skill';

interface ComponentProps {
  tag: Skill['tags'][0];
  className: string;
}

export default function SkillTag({ tag, className }: ComponentProps) {
  const text = useI18n().components.skill.tag[tag];
  const tagStyle = {
    interested: { borderColor: colors.blue[500], color: colors.blue[500] },
    notInterested: { borderColor: colors.grey[300], color: colors.grey[500] },
    beginner: { borderColor: colors.teal[300], color: colors.teal[300] },
    intermediate: { borderColor: colors.teal[500], color: colors.teal[500] },
    advanced: { borderColor: colors.teal[800], color: colors.teal[800] },
    forfun: { borderColor: colors.indigo[300], color: colors.indigo[300] },
    professionalExperience: { borderColor: colors.indigo[500], color: colors.indigo[500] },
  }[tag];

  return <Chip className={className} variant="outlined" size="small" style={tagStyle} label={text} />;
}
