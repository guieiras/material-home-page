import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';

import HomeCard from '../../interfaces/homeCard';
import pathBuilder from '../../util/pathBuilder';

interface ComponentProps {
  cards: HomeCard[];
  currentLanguagePath: string;
}

export default function HomeProfileLinkCards({ cards, currentLanguagePath }: ComponentProps): JSX.Element {
  return (
    <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid item xs={12} md={4} key={card.slug}>
          <Card style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                <Link href={pathBuilder(currentLanguagePath, card.slug)}>{card.name}</Link>
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
