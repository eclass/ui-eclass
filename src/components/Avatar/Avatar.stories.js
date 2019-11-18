import React from 'react'
import { Avatar } from './Avatar'
import flor from '../UI/images/flor-de-margarita-830x551.jpg'
import person2 from '../UI/images/263385.jpeg'
import person1 from '../UI/images/132554.jpeg'

export default {
  title: 'Plataforma v8|Avatar',
  parameters: {
    component: Avatar,
    componentSubtitle:
      'Muestra un avatar por defecto, con iniciales y fotografía'
  }
}

export const avatar = () => (
  <>
    <Avatar
      fullName="María Salinas"
      userId={'87398241'}
      size={70}
      fontSize={30}
    />
    <Avatar
      fullName="Juan Maestro"
      userId={'87398242'}
      picture={flor}
      size={70}
    />
    <Avatar
      fullName="Flor Jansen"
      userId={'87398242'}
      picture={person2}
      size={70}
    />
  </>
)

export const LoadingOrDefault = () => (
  <>
    <Avatar fullName="María Salinas" userId={'8739'} size={50} fontSize={20} />
    <Avatar fullName="juanito parra" userId={'40'} size={50} fontSize={20} />
    <Avatar size={50} fontSize={20} />
  </>
)

export const Picture = () => (
  <>
    <Avatar
      fullName="María Salinas"
      userId={'87398242'}
      size={70}
      picture={person1}
      fontSize={30}
    />
    <Avatar
      fullName="Luis Mora"
      userId={'435'}
      size={70}
      picture={person2}
      fontSize={30}
    />
    <Avatar
      fullName="Rosa Gutierrez"
      userId={'43'}
      picture={flor}
      size={70}
      fontSize={30}
    />
  </>
)
