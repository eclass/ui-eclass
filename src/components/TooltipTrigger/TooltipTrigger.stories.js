import React from 'react';
import { storiesOf } from '@storybook/react';
import TooltipTrigger from './TooltipTrigger';

import { withA11y } from '@storybook/addon-a11y';


// should only be added once
// best place is in config.js



storiesOf('Tooltip', module)
.addDecorator(withA11y)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Standar', () => <TooltipTrigger />)

