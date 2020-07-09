import { colors } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
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
