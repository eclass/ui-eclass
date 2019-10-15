import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressIcon from './ProgressIcon';
import { withA11y } from '@storybook/addon-a11y';//accesibilidad addon
import variables from '../variables'


storiesOf('ProgressIcon', module)
    .addDecorator(withA11y)
    .addDecorator(story => <div style={{ display: 'flex', padding: '2em' }}>{story()}</div>)
    .add('All', () => <>
    <ProgressIcon color="white" bgcolor={variables.setColors.deepSkyBlue} icon={"in-progress"} />
    <ProgressIcon color="white" bgcolor={variables.setColors.deepSkyBlue} icon={"in-progress"} />
    <ProgressIcon color="white" bgcolor={variables.setColors.deepSkyBlue} icon={"opened"} />
    <ProgressIcon color="white" bgcolor={"orange"} icon={"blocked"}/>
    <ProgressIcon color="white" bgcolor={"#5E7A8C"} icon={"done"}/>
    </>)
    .add('in-progress', () => <ProgressIcon size={"40px"} color="white" bgcolor={variables.setColors.deepSkyBlue} icon={"in-progress"}  />)
    .add('in-progress', () => <ProgressIcon size={"40px"} color="white" bgcolor={variables.setColors.deepSkyBlue} icon={"in-progress"} />)
    .add('opened', () => <ProgressIcon size={"40px"} color="white" bgcolor={variables.setColors.deepSkyBlue} icon={"opened"} />)
    .add('blocked', () => <ProgressIcon size={"40px"} color="white" bgcolor={"orange"} icon={"blocked"}/>)
    .add('done', () => <ProgressIcon size={"40px"} color="white" bgcolor={"#5E7A8C"} icon={"done"}/>)

