import React from 'react';
import { storiesOf } from '@storybook/react';
import  TooltipTrigger  from './TooltipTrigger';
import ProgressIcon from '../ProgressIcon/ProgressIcon';
import variables from '../variables'



storiesOf('TooltipTrigger', module)
    .addDecorator(story => <div style={{ display: 'flex' }}>{story()}</div>)
    .add('Top', () => <>
        <ProgressIcon color="white" bgcolor={variables.setColors.deepSkyBlue} icon={"in-progress"} className={`Timeline__item__icon `} id={`Tooltip-in-progress`}/>
        <TooltipTrigger trigger="click" target={"in-progress"}>
        Para continuar debes completar la unidad anterior </TooltipTrigger>
        <ProgressIcon color="white" bgcolor={variables.setColors.deepSkyBlue} icon={"opened"} id={`Tooltip-opened`} />
        <TooltipTrigger placement={"right"}trigger="hover" target={"opened"}>
        Unidad Liberada</TooltipTrigger>
    </>)

    



