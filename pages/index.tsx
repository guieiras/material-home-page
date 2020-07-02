import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Layout from '../src/components/Layout';
import Link from '../src/components/Link';

export default function Index(): JSX.Element {
  return (
    <Layout>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/" color="secondary">
          Link to Home
        </Link>
      </Box>
    </Layout>
  );
}
