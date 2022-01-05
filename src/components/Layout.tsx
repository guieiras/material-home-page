import Container from '@mui/material/Container';
import React from 'react';

import Language from '../interfaces/language';

import LayoutFooter from './Layout/Footer';
import LayoutNavbar from './Layout/Navbar';

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

  return (
    <>
      <LayoutNavbar siteName={siteName} currentLanguage={currentLanguagePath} />
      <Container
        component="main"
        maxWidth="md"
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 96px)'
        }}
        sx={{ mt: 4 }}
      >
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
