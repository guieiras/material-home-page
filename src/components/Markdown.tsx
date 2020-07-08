import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'markdown-to-jsx';
import React, { Props } from 'react';

const options = {
  overrides: {
    h1: { component: Typography, props: { variant: 'h1' } },
    h2: { component: Typography, props: { variant: 'h2' } },
    h3: { component: Typography, props: { variant: 'h3' } },
    h4: { component: Typography, props: { variant: 'h4' } },
    span: { component: Typography, props: { variant: 'caption', paragraph: true } },
    p: { component: Typography, props: { variant: 'body2', paragraph: true, style: { marginBottom: '0.3em' } } },
    a: { component: Link },
  },
};

export default function Markdown(props: Props<unknown>) {
  return <ReactMarkdown options={options} {...props} />;
}
