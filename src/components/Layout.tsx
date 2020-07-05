import Container from '@material-ui/core/Container';
import React from 'react';

import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  siteName: string;
}

export default function Layout({ children, siteName }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar siteName={siteName} />
      <Container maxWidth="md">{children}</Container>
    </>
  );
}
