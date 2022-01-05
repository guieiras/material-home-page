import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FileAccount from 'mdi-material-ui/FileAccount';
import Post from 'mdi-material-ui/Post';
import ToyBrick from 'mdi-material-ui/ToyBrick';
import propTypes from 'prop-types';
import React from 'react';

import pathBuilder from '../../util/pathBuilder';
import { useCMS } from '../content';

interface LinkProps {
  href: string;
  icon: JSX.Element;
  text: string;
}

interface ComponentProps {
  siteName: string;
  currentLanguage: string;
}

function NavbarLink({ href, text, icon }: LinkProps): JSX.Element {
  return (
    <IconButton href={href} component="a" title={text} color="inherit">
      {icon}
    </IconButton>
  );
}

NavbarLink.propTypes = {
  href: propTypes.string,
  text: propTypes.string,
  icon: propTypes.element,
};

export default function LayoutNavbar({ currentLanguage, siteName }: ComponentProps): JSX.Element {
  const content = useCMS();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          component="a"
          href={`/${currentLanguage}`}
          style={{
            color: 'inherit',
            textDecoration: 'none',
            flexGrow: 1
          }}
          variant="h6"
        >
          {siteName}
        </Typography>
        {content.pages.resume && (
          <NavbarLink
            href={pathBuilder(currentLanguage, 'resume')}
            text={content.pages.resume.title}
            icon={<FileAccount aria-hidden="true" />}
          />
        )}
        {content.pages.portfolio && (
          <NavbarLink
            href={pathBuilder(currentLanguage, 'portfolio')}
            text={content.pages.portfolio.title}
            icon={<ToyBrick aria-hidden="true" />}
          />
        )}
        {content.pages.blog && (
          <NavbarLink
            href={pathBuilder(currentLanguage, 'blog')}
            text={content.pages.blog.title}
            icon={<Post aria-hidden="true" />}
          />
        )}
      </Toolbar>
    </AppBar>
  );
}
