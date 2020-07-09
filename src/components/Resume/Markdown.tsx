import { makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'markdown-to-jsx';
import React, { Props } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  paragraph: {
    lineHeight: 1.7,
  },
}));

export default function Markdown(props: Props<unknown>) {
  const classes = useStyles();
  const options = {
    overrides: {
      h1: { component: Typography, props: { variant: 'h1' } },
      h2: { component: Typography, props: { variant: 'h2' } },
      h3: { component: Typography, props: { variant: 'h3' } },
      h4: { component: Typography, props: { variant: 'h4' } },
      span: {
        component: Typography,
        props: { className: classes.paragraph, color: 'textSecondary', variant: 'body1', paragraph: true },
      },
      p: {
        component: Typography,
        props: { className: classes.paragraph, color: 'textSecondary', variant: 'body1', paragraph: true },
      },
      a: { component: Link },
    },
  };

  return <ReactMarkdown className={classes.root} options={options} {...props} />;
}
