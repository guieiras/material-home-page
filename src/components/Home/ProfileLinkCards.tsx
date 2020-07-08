import { makeStyles, CardContent, Link } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import HomeCard from '../../interfaces/homeCard';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
  },
}));

interface ComponentProps {
  cards: HomeCard[];
  currentLanguagePath: string;
}

export default function HomeProfileLinkCards({ cards, currentLanguagePath }: ComponentProps): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid item xs={12} md={4} key={card.slug}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                <Link href={`${currentLanguagePath && '/'}${currentLanguagePath}/${card.slug}`}>{card.name}</Link>
              </Typography>
              <Typography variant="body2" component="p">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
