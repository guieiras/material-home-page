import Head from 'next/head';
import React from 'react';

interface Props {
  title?: string;
  description?: string;
  siteName?: string;
}

const Meta = (props: Props) => (
  <Head>
    {props.title && <title>{props.title}</title>}
    {props.title && <meta name="description" content={props.title} />}
    {props.title && <meta name="og:title" property="og:title" content={props.title} />}
    {props.description && <meta name="og:description" property="og:description" content={props.description} />}
    {props.siteName && <meta property="og:site_name" content={props.siteName} />}
    {props.title && <meta name="twitter:title" content={props.title} />}
    {props.description && <meta name="twitter:description" content={props.description} />}
    {props.siteName && <meta name="twitter:site" content={props.siteName} />}
  </Head>
);

export default Meta;
