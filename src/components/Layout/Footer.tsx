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
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  languageSpan: {
    margin: theme.spacing(0, 0.5),
  },
  languageLink: {
    margin: theme.spacing(0, 0.5),
    opacity: 0.2,
  },
  flag: {
    width: theme.spacing(4),
  },
}));

interface LayoutProps {
  siteName: string;
  languages: Language[];
  currentLanguage: string;
  currentPath: string;
}

export default function LayoutFooter({ currentPath, currentLanguage, languages, siteName }: LayoutProps): JSX.Element {
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
            <a
              href={`/${lang.default ? '' : lang.code}/${currentPath || ''}`
                .replace('//', '/')
                .replace(/(?<=.)\/$/, '')}
              className={classes.languageLink}
              key={lang.code}
            >
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
