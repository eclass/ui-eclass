import React from 'react';
import { storiesOf } from '@storybook/react';
import  TooltipTrigger  from './TooltipTrigger';
import ProgressIcon from '../ProgressIcon/ProgressIcon';
import variables from '../variables'

storiesOf('TooltipTrigger', module)
    .addDecorator(story => <div style={{ display: 'flex',  justifyContent: "space-between"  }}>{story()}</div>)
    .add('Positions', () => <>
        <ProgressIcon color="white" bgcolor={variables.setColors.deepSkyBlue} icon="in-progress" id='Tooltip-in-progress'/>
        <TooltipTrigger placement="top" trigger="hover" target="in-progress" children="Visto 0 de 4 contenidos" />

        <ProgressIcon color="white" bgcolor={variables.setColors.deepSkyBlue} icon="opened" id='Tooltip-opened' />
        <TooltipTrigger placement="right" trigger="hover" target="opened" children="Unidad Liberada" />

        <ProgressIcon color="white" bgcolor="orange" icon="blocked" id='Tooltip-blocked' />
        <TooltipTrigger placement="left" trigger="hover" target="blocked" children="Para continuar debes completar la unidad anterior" />

        <ProgressIcon color="white" bgcolor="#5E7A8C" icon="done" id='Tooltip-done' />
        <TooltipTrigger placement="bottom" trigger="hover" target="done" children="Visto 4 de 4 contenidos" />

        <ProgressIcon color="white" bgcolor={variables.setColors.veryLightPink} icon="blocked" id='Tooltip-block-gray' />
        <TooltipTrigger placement="auto" trigger="hover" target="block-gray" children="El examen estará disponible a partir del...." />
    </>)
    .add('Top trigger Click', () => <> 
        <ProgressIcon color="white" bgcolor={variables.setColors.deepSkyBlue} icon="in-progress"  id='Tooltip-click'/>
        <TooltipTrigger placement="top" trigger="click" target="click" >Visto 0 de 4 contenidos</TooltipTrigger>
    </>)
    .add('Right trigger Hover', () => <> 
        <ProgressIcon color="white" bgcolor={variables.setColors.deepSkyBlue} icon="in-progress"  id='Tooltip-focus'/>
        <TooltipTrigger placement="right" trigger="hover" target="focus">Visto 0 de 4 contenidos</TooltipTrigger>
    </>)



