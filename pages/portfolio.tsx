import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { fetchDataToStaticProps } from '../src/cms';
import { useCMS } from '../src/components/content';
import ContentfulRichText from '../src/components/ContentfulRichText';
import LayoutHOC from '../src/components/Layout/HOC';
import PortfolioTag from '../src/components/PortfolioTag';
import { useI18n } from '../src/i18n';
import Block from '../src/interfaces/block';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3),
  },
  sectionHeader: {
    marginTop: theme.spacing(5),
  },
  grid: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardTitle: {
    marginBottom: 'auto',
  },
  tag: {
    marginRight: theme.spacing(1),
  },
}));

export function Portfolio(): JSX.Element {
  const texts = useI18n();
  const classes = useStyles();
  const content = useCMS();

  return (
    <>
      <Typography variant="h3" component="h1" className={classes.title}>
        {(content.blocks.portfolio as Block).title}
      </Typography>
      {ContentfulRichText((content.blocks.portfolio as Block).content)}
      <Grid container spacing={2} className={classes.grid}>
        {content.portfolio.map((project) => (
          <Grid item xs={12} sm={6} key={project.projectUrl}>
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
    </>
  );
}

const getStaticProps = fetchDataToStaticProps();

export default LayoutHOC(Portfolio, { path: 'portfolio' });
export { getStaticProps };
