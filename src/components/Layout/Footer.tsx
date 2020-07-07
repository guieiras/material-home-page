import { makeStyles, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Flags from 'country-flag-icons/react/3x2';
import React from 'react';

import Language from '../../interfaces/language';

const useStyles = makeStyles((theme) => ({
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
  siteName: string;
  languages: Language[];
  currentLanguage: string;
}

export default function LayoutFooter({ currentLanguage, languages, siteName }: LayoutProps): JSX.Element {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center">
        {languages.map((lang) => {
          const FlagComponent = Flags[lang.code.split('-')[1]];
          return lang.code === currentLanguage ? (
            <span className={classes.languageSpan} key={lang.code}>
              <FlagComponent className={classes.flag} />
            </span>
          ) : (
            <a href={lang.default ? '/' : `/${lang.code}`} className={classes.languageLink} key={lang.code}>
              <FlagComponent className={classes.flag} />
            </a>
          );
        })}
      </Grid>
      <Typography variant="body2" color="textSecondary">
        {siteName} &copy; {new Date().getFullYear()}
      </Typography>
    </footer>
  );
}
