import { makeStyles, useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FileAccount from 'mdi-material-ui/FileAccount';
import Post from 'mdi-material-ui/Post';
import ToyBrick from 'mdi-material-ui/ToyBrick';
import propTypes from 'prop-types';
import React from 'react';

interface LinkProps {
  href: string;
  icon: JSX.Element;
  isMobile: boolean;
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

function NavbarLink({ isMobile, href, text, icon }: LinkProps): JSX.Element {
  return isMobile ? (
    <IconButton href={href} component="a" title={text} color="inherit">
      {icon}
    </IconButton>
  ) : (
    <Button href={href} component="a" color="inherit">
      {text}
    </Button>
  );
}
NavbarLink.propTypes = {
  isMobile: propTypes.bool,
  href: propTypes.string,
  text: propTypes.string,
  icon: propTypes.element,
};

export default function Navbar({ siteName }: ComponentProps): JSX.Element {
  const theme = useTheme();
  const classes = useStyles();

  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {siteName}
        </Typography>
        <NavbarLink isMobile={isMobile} href="resume" text="Currículo" icon={<FileAccount aria-hidden="true" />} />
        <NavbarLink isMobile={isMobile} href="portfolio" text="Projetos" icon={<ToyBrick aria-hidden="true" />} />
        <NavbarLink isMobile={isMobile} href="blog" text="Blog" icon={<Post aria-hidden="true" />} />
      </Toolbar>
    </AppBar>
  );
}
