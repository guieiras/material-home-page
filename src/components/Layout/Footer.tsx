import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Flags from 'country-flag-icons/react/3x2';
import React from 'react';

import { getTexts } from '../../i18n';
import Language from '../../interfaces/language';
import pathBuilder from '../../util/pathBuilder';

const classes = {
  root: 'Footer',
  languageSpan: 'Footer__language-span',
  languageLink: 'Footer__language-link',
  flag: 'Footer__flag',
};

const Root = styled('footer')(({ theme }) => ({
  [`&.${classes.root}`]: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  [`& .${classes.languageSpan}`]: {
    margin: theme.spacing(0, 0.5),
  },
  [`& .${classes.languageLink}`]: {
    margin: theme.spacing(0, 0.5),
    opacity: 0.2,
  },
  [`& .${classes.flag}`]: {
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
  return (
    <Root className={classes.root}>
      <Grid container justifyContent="center">
        {languages.map((lang) => {
          const FlagComponent = Flags[lang.code.split('-')[1]];
          return lang.code === currentLanguage ? (
            <span className={classes.languageSpan} key={lang.code}>
              <FlagComponent className={classes.flag} />
            </span>
          ) : (
            <a
              href={pathBuilder(lang.default ? '' : lang.code, currentPath)}
              className={classes.languageLink}
              title={getTexts(lang.code).linkToLanguage}
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
    </Root>
  );
}
