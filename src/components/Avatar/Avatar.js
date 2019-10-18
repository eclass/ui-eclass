import React, { useState, useEffect } from 'react'
import { Wrapper } from './styles'

const Avatar = ({ image, alt, size, userId, picture, fullName, fontSize }) => {
  const [selectedColor, setColor] = useState('#0076ba')
  const [validUrl, setValidUrl] = useState(false)
  useEffect(() => {
    const colors = [
      '#0076ba',
      '#229f9c',
      '#2cb26b',
      '#30baed',
      '#95569e',
      '#9bc03a',
      '#d84315',
      '#f5a623',
      '#f6712f',
      '#ff6363'
    ]

    let colorPosition = 0
    if (userId >= 0) {
      const numbers = userId.toString().split('')
      colorPosition = parseInt(numbers[numbers.length - 1], 10)
    } else {
      colorPosition = Math.floor(Math.random() * colors.length)
    }

    setColor(colors[colorPosition])
  }, [userId])

  const splitLetterFromName = input =>
    input
      .split(' ')
      .map(string => string[0])
      .slice(0, 2)
      .join('')

  const ImgElement = ({ url, fn, alt }) => {
    return (
      <img
        className={validUrl ? ' ' : 'test-img'}
        alt={alt}
        src={url}
        onLoad={() => fn(true)}
        onError={() => fn(false)}
      />
    )
  }

  if (picture) {
    if (!validUrl) {
      return (
        <Wrapper
          fontSize={fontSize}
          size={size}
          selectedColor={selectedColor}
          className="RoundedImage">
          <span>{splitLetterFromName(fullName)}</span>
          <ImgElement
            url={picture}
            alt={fullName}
            fn={status => {
              setValidUrl(status)
            }}
          />
        </Wrapper>
      )
    }
    return (
      <Wrapper
        fontSize={fontSize}
        size={size}
        selectedColor={selectedColor}
        className="RoundedImage">
        <img src={picture} alt={alt} />
      </Wrapper>
    )
  }
  return (
    <Wrapper
      fontSize={fontSize}
      size={size}
      selectedColor={selectedColor}
      className="PlaceholderName flex-center">
      <span>{splitLetterFromName(fullName)}</span>
    </Wrapper>
  )
}

Avatar.defaultProps = {
  alt: 'Rounded Image',
  image: '',
  size: 50
}

export default Avatar
