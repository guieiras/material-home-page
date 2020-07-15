import { BLOCKS } from '@contentful/rich-text-types';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import ContentfulRichText, { TextComponent } from '../ContentfulRichText';

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: TextComponent({ component: 'h1', variant: 'h4' }),
    [BLOCKS.HEADING_2]: TextComponent({ component: 'h2', variant: 'h5', margins: [24, 0] }),
    [BLOCKS.HEADING_3]: TextComponent({ component: 'h3', variant: 'h6', margins: [24, 0] }),
    [BLOCKS.HEADING_4]: TextComponent({ component: 'h4', variant: 'subtitle2', margins: [24, 0] }),
    [BLOCKS.HEADING_5]: TextComponent({ component: 'h5', variant: 'body1' }),
    [BLOCKS.HEADING_6]: TextComponent({ component: 'h6', variant: 'body2' }),
    [BLOCKS.PARAGRAPH]: TextComponent({ component: 'p', variant: 'body1', margins: [0, 16] }),
    [BLOCKS.QUOTE]: function QuoteBlock(_, children) {
      return <Paper style={{ padding: 16 }}>{children}</Paper>;
    },
  },
};

export default function PostRichText(object) {
  return ContentfulRichText(object, options);
}
