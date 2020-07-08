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
    marginTop: 32,
    minHeight: 'calc(100vh - 96px)',
  },
  footer: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    padding: 32,
    textAlign: 'center',
  },
  languageSpan: {
    margin: '0 5px',
  },
  languageLink: {
    margin: '0 5px',
    opacity: 0.2,
  },
  flag: {
    width: 30,
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
