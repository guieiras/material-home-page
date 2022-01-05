import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'markdown-to-jsx';
import React from 'react';

export default function Markdown({ children }: { children: string }) {
  const options = {
    overrides: {
      h1: { component: Typography, props: { variant: 'h1' } },
      h2: { component: Typography, props: { variant: 'h2' } },
      h3: { component: Typography, props: { variant: 'h3' } },
      h4: { component: Typography, props: { variant: 'h4' } },
      span: {
        component: Typography,
        props: { style: { lineHeight: 1.7 }, color: 'textSecondary', variant: 'body1', paragraph: true },
      },
      p: {
        component: Typography,
        props: { style: { lineHeight: 1.7 }, color: 'textSecondary', variant: 'body1', paragraph: true },
      },
      a: { component: Link },
    },
  };

  return (
    <ReactMarkdown sx={{ mt: 2 }} options={options}>
      {children}
    </ReactMarkdown>
  );
}
