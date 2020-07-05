import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';

import Navbar from './Navbar';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 32,
  },
}));

interface LayoutProps {
  children: React.ReactNode;
  siteName: string;
}

export default function Layout({ children, siteName }: LayoutProps): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Navbar siteName={siteName} />
      <Container maxWidth="md" className={classes.root}>
        {children}
      </Container>
    </>
  );
}
