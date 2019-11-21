import React from 'react'
import { TooltipTrigger } from './TooltipTrigger'
import { ProgressIcon } from '../ProgressIcon'
import variables from '../variables'

export default {
  title: 'Plataforma v8| TooltipTrigger ',

  parameters: {
    component: TooltipTrigger,
    componentSubtitle: 'Tooltips con trigger a diferentes acciones'
  }
}

export const hoverAndPosition = () => (
  <>
    <ProgressIcon
      color="white"
      bgcolor={variables.setColors.deepSkyBlue}
      icon="in-progress"
      id="Tooltip-in-progress"
    />
    <TooltipTrigger placement="top" trigger="hover" target="in-progress">
      {'Visto 0 de 4 contenidos'}
    </TooltipTrigger>

    <ProgressIcon
      color="white"
      bgcolor={variables.setColors.deepSkyBlue}
      icon="opened"
      id="Tooltip-opened"
    />
    <TooltipTrigger placement="right" trigger="hover" target="opened">
      {'Unidad Liberada'}
    </TooltipTrigger>

    <ProgressIcon
      color="white"
      bgcolor="orange"
      icon="blocked"
      id="Tooltip-blocked"
    />
    <TooltipTrigger placement="left" trigger="hover" target="blocked">
      {'Para continuar debes completar la unidad anterior'}
    </TooltipTrigger>

    <ProgressIcon
      color="white"
      bgcolor="#5E7A8C"
      icon="done"
      id="Tooltip-done"
    />
    <TooltipTrigger placement="bottom" trigger="hover" target="done">
      {'Visto 0 de 4 contenidos'}
    </TooltipTrigger>

    <ProgressIcon
      color="white"
      bgcolor={variables.setColors.veryLightPink}
      icon="blocked"
      id="Tooltip-block-gray"
    />
    <TooltipTrigger placement="auto" trigger="hover" target="block-gray">
      {'El examen estará disponible a partir del....'}
    </TooltipTrigger>
  </>
)

export const triggerClick = () => (
  <>
    <ProgressIcon
      color="white"
      bgcolor={variables.setColors.deepSkyBlue}
      icon="in-progress"
      id="Tooltip-click"
    />
    <TooltipTrigger placement="top" trigger="click" target="click">
      Visto 0 de 4 contenidos
    </TooltipTrigger>
  </>
)
