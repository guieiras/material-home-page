import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';

import Language from '../interfaces/language';

import LayoutFooter from './Layout/Footer';
import LayoutNavbar from './Layout/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(4),
    minHeight: 'calc(100vh - 96px)',
  },
}));

interface LayoutProps {
  children: React.ReactNode;
  siteName: string;
  languages: Language[];
  currentLanguage: string;
  currentLanguagePath: string;
  currentPath: string;
}

export default function Layout({
  children,
  currentLanguage,
  currentLanguagePath,
  currentPath,
  languages,
  siteName,
}: LayoutProps): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <LayoutNavbar siteName={siteName} currentLanguage={currentLanguagePath} />
      <Container maxWidth="md" className={classes.root}>
        {children}
        <LayoutFooter
          currentPath={currentPath}
          currentLanguage={currentLanguage}
          languages={languages}
          siteName={siteName}
        />
      </Container>
    </>
  );
}
