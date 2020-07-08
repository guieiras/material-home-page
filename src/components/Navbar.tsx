import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FileAccount from 'mdi-material-ui/FileAccount';
import Post from 'mdi-material-ui/Post';
import ToyBrick from 'mdi-material-ui/ToyBrick';
import propTypes from 'prop-types';
import React from 'react';

import { useI18n } from '../i18n';

interface LinkProps {
  href: string;
  icon: JSX.Element;
  text: string;
}

interface ComponentProps {
  siteName: string;
}

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

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

export default function Navbar({ siteName }: ComponentProps): JSX.Element {
  const texts = useI18n();
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {siteName}
        </Typography>
        <NavbarLink href="resume" text={texts.pages.resume.title} icon={<FileAccount aria-hidden="true" />} />
        <NavbarLink href="portfolio" text={texts.components.navbar.portfolio} icon={<ToyBrick aria-hidden="true" />} />
        <NavbarLink href="blog" text={texts.components.navbar.blog} icon={<Post aria-hidden="true" />} />
      </Toolbar>
    </AppBar>
  );
}
