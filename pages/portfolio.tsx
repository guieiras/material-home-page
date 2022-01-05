import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

import { fetchDataToStaticProps } from '../src/cms';
import { useCMS } from '../src/components/content';
import ContentfulRichText from '../src/components/ContentfulRichText';
import LayoutHOC from '../src/components/Layout/HOC';
import Meta from '../src/components/Layout/Meta';
import PortfolioTag from '../src/components/PortfolioTag';
import { useI18n } from '../src/i18n';

const classes = {
  title: 'Portfolio__title',
  sectionHeader: 'Portfolio__section-header',
  grid: 'Portfolio__grid',
  card: 'Portfolio__card',
  cardTitle: 'Portfolio__card-title',
  tag: 'Portfolio__tag',
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.title}`]: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  [`& .${classes.sectionHeader}`]: {
    marginTop: theme.spacing(5),
  },
  [`& .${classes.grid}`]: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  [`& .${classes.card}`]: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  [`& .${classes.cardTitle}`]: {
    marginBottom: 'auto',
  },
  [`& .${classes.tag}`]: {
    marginRight: theme.spacing(1),
  },
}));

export function Portfolio(): JSX.Element {
  const texts = useI18n();
  const content = useCMS();

  return (
    <Root>
      <Meta
        title={`${content.pages.portfolio.title} - ${content.profile.name}`}
        description={content.pages.portfolio.description}
      />
      <Typography variant="h3" component="h1" className={classes.title}>
        {content.pages.portfolio.title}
      </Typography>
      {ContentfulRichText(content.pages.portfolio.content)}
      <Grid container spacing={2} className={classes.grid}>
        {content.portfolio.map((project) => (
          <Grid item xs={12} sm={6} key={project.projectUrl || project.repositoryUrl}>
            <Card className={classes.card}>
              <CardContent className={classes.cardTitle}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
              <CardContent>
                {project.tags.map((tag) => (
                  <PortfolioTag key={tag.name} tag={tag} className={classes.tag} />
                ))}
              </CardContent>
              <CardActions>
                {project.projectUrl && (
                  <Button rel="noreferrer" target="_blank" size="small" color="primary" href={project.projectUrl}>
                    {texts.components.portfolio.project}
                  </Button>
                )}
                {project.repositoryUrl && (
                  <Button rel="noreferrer" target="_blank" size="small" href={project.repositoryUrl}>
                    {texts.components.portfolio.repository}
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
}

const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Portfolio, { path: 'portfolio' });
export { getStaticProps };
