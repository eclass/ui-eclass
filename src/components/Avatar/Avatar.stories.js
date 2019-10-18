import React from 'react'
import { action } from '@storybook/addon-actions'
import Avatar from './Avatar'
import flor from '../UI/images/flor-de-margarita-830x551.jpg'
import person1 from '../UI/images/132554.jpeg'
import person2 from '../UI/images/263385.jpeg'

export default {
  title: 'Plataforma v8|Avatar',
  parameters: {
    component: Avatar,
    componentSubtitle:
      'Displays an image that represents a user or organization'
  }
}

export const avatar = () => (
  <>
    <Avatar
      fullName="Juan Maestro"
      userId={'87398242'}
      picture={flor}
      size={70}
      fontSize={14}
    />
    <Avatar
      fullName="Flor Jansen"
      userId={'87398242'}
      picture={person1}
      size={70}
      fontSize={14}
    />
    <Avatar
      fullName="Flor Jansen"
      userId={'87398242'}
      picture={person2}
      size={70}
      fontSize={14}
    />
  </>
)

export const avatarName = () => (
  <>
    <Avatar
      fullName="Flor Jansen"
      userId={'87398242'}
      size={70}
      fontSize={33}
    />
    <Avatar fullName="juanito parra" userId={'435'} size={70} fontSize={33} />
    <Avatar fullName="elias muñoz" userId={'43'} size={70} fontSize={33} />
  </>
)

export const sizes = () => (
  <>
    <Avatar
      fullName="Flor Jansen"
      userId={'87398242'}
      size={80}
      fontSize={37}
    />
    <Avatar fullName="juanito parra" userId={'435'} size={50} fontSize={23} />
    <Avatar fullName="elias muñoz" userId={'43'} size={40} fontSize={18} />
  </>
)
