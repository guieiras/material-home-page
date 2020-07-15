import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Typography } from '@material-ui/core';
import React, { ElementType } from 'react';

interface TextComponentProps {
  component: ElementType;
  variant:
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline'
    | 'srOnly';
  margins?: [number, number];
}

export function TextComponent({ component, variant, margins }: TextComponentProps) {
  const marginTop = (margins && margins[0]) || 8;
  const marginBottom = (margins && margins[1]) || 0;
  return function TypographyComponent(_, children: JSX.Element): JSX.Element {
    return (
      <Typography component={component} variant={variant} style={{ marginTop, marginBottom }}>
        {children}
      </Typography>
    );
  };
}

const defaultOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: TextComponent({ component: 'h1', variant: 'h1' }),
    [BLOCKS.HEADING_2]: TextComponent({ component: 'h2', variant: 'h2' }),
    [BLOCKS.HEADING_3]: TextComponent({ component: 'h3', variant: 'h3' }),
    [BLOCKS.HEADING_4]: TextComponent({ component: 'h4', variant: 'h4' }),
    [BLOCKS.HEADING_5]: TextComponent({ component: 'h5', variant: 'h5' }),
    [BLOCKS.HEADING_6]: TextComponent({ component: 'h6', variant: 'h6' }),
    [BLOCKS.PARAGRAPH]: TextComponent({ component: 'p', variant: 'body1' }),
  },
};

export default function ContentfulRichText(object, options = defaultOptions) {
  return documentToReactComponents(object, options);
}
