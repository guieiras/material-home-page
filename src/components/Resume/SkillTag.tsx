import { colors } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
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
    interested: { backgroundColor: colors.grey[300], color: colors.grey[900] },
    notInterested: { backgroundColor: colors.grey[300], color: colors.grey[600] },
    beginner: { backgroundColor: colors.grey[200], color: colors.grey[900] },
    intermediary: { backgroundColor: colors.grey[300], color: colors.grey[900] },
    advanced: { backgroundColor: colors.grey[400], color: colors.grey[900] },
    forfun: { backgroundColor: colors.grey[200], color: colors.grey[900] },
    professionalExperience: { backgroundColor: colors.grey[400], color: colors.grey[900] },
  }[tag];
  return <Chip className={className} size="small" style={tagStyle} label={text} />;
}
