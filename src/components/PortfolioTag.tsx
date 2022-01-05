import { colors } from '@mui/material'
import Chip from '@mui/material/Chip';
import React from 'react';

import { PortfolioTag as Tag } from '../interfaces/portfolio';

interface ComponentProps {
  tag: Tag;
  className: string;
}

export default function PortfolioTag({ tag, className }: ComponentProps) {
  const color = tag.color.split('.').reduce((memo, key) => memo[key], colors);
  const style = { borderColor: color, color: color };
  return <Chip className={className} variant="outlined" size="small" style={style} label={tag.name} />;
}
