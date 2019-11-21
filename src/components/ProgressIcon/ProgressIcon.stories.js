import React from 'react'
import { ProgressIcon } from './ProgressIcon'
import variables from '../variables'

export default {
  title: 'Plataforma v8|Progress Icon ',

  parameters: {
    component: ProgressIcon,
    componentSubtitle: 'Iconos de progreso diseñados para plataforma v8'
  }
}

export const icons = () => (
  <>
    <ProgressIcon
      color="white"
      bgcolor={variables.setColors.deepSkyBlue}
      icon={'in-progress'}
    />
    <ProgressIcon
      color="white"
      bgcolor={variables.setColors.deepSkyBlue}
      icon={'opened'}
    />
    <ProgressIcon color="white" bgcolor={'orange'} icon={'blocked'} />
    <ProgressIcon color="white" bgcolor={'#5E7A8C'} icon={'done'} />
    <ProgressIcon
      color="white"
      bgcolor={variables.setColors.veryLightPink}
      icon={'blocked'}
    />
  </>
)

export const sizes = () => (
  <>
    <ProgressIcon
      size={'50px'}
      color="white"
      bgcolor={variables.setColors.deepSkyBlue}
      icon={'in-progress'}
    />
    <ProgressIcon
      size={'40px'}
      color="white"
      bgcolor={variables.setColors.deepSkyBlue}
      icon={'in-progress'}
    />
    <ProgressIcon
      size={'27px'}
      color="white"
      bgcolor={variables.setColors.deepSkyBlue}
      icon={'in-progress'}
    />
  </>
)
