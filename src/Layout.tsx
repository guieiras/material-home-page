import Container from '@material-ui/core/Container';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps): JSX.Element {
  return <Container maxWidth="sm">{children}</Container>;
}
