// @External Dependencies
import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import UIVars from '../../variables'

const getViewBox = (viewBox, width, height) => {
  if (viewBox) {
    return `0 0 ${viewBox} ${viewBox}`
  }
  return `0 0 ${width} ${height || width}`
}

const getPath = (name, props) => {
  switch (name) {
    case 'bell':
      return (
        <path
          {...props}
          d="M11.826 6.957V4.87A4.84 4.84 0 0 0 6.956 0a4.84 4.84 0 0 0-4.869 4.87v2.087C2.087 9.252 0 9.809 0 11.13c0 1.183 2.713 2.087 6.957 2.087 4.243 0 6.956-.904 6.956-2.087 0-1.321-2.087-1.878-2.087-4.173zm-4.869 7.652c-.905 0-1.67-.07-2.435-.14C5.009 15.375 5.913 16 6.957 16 8 16 8.974 15.374 9.39 14.47c-.765.07-1.53.139-2.434.139z"
        />
      )
    case 'comment':
      return (
        <path
          {...props}
          d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7c.4 0 .8 0 1.1-.1L14 16v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7z"
        />
      )
    case 'flag':
      return (
        <path
          {...props}
          fillRule="evenodd"
          d="M12 6l2-5H2c0-.6-.4-1-1-1S0 .4 0 1v14c0 .6.4 1 1 1s1-.4 1-1v-4h12l-2-5z"
        />
      )
    case 'circle-check':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M8 .5c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.9L3.6 8.5 5 7.1l2 2 4-4 1.4 1.4L7 11.9z"
        />
      )
    case 'belongs':
      return (
        <path
          {...props}
          fillRule="evenodd"
          d="M11 0H8v7L5.5 5 3 7V0H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h10c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z"
        />
      )
    case 'certificate':
      return (
        <g {...props} fillRule="nonzero">
          <path d="M7 4h2v2H7z" />
          <path d="M15 8h-2V4.618l.553.277a1 1 0 1 0 .894-1.79l-6-3a1 1 0 0 0-.894 0l-6 3a1 1 0 0 0 .894 1.79L3 4.618V8H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6v-4h2v4h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zM5 13H3v-3h2v3zm0-5V4a.98.98 0 0 0-.07-.347L8 2.118l3.07 1.535A.98.98 0 0 0 11 4v4H5zm8 5h-2v-3h2v3z" />
        </g>
      )
    case 'alert':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M8 .278c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7v-5h2v5z"
        />
      )
    case 'calendar':
      return (
        <g {...props} fillRule="evenodd">
          <path
            fillRule="nonzero"
            d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 12H2V5h12v9z"
          />
          <path d="M4 7h2v2H4zM7 7h2v2H7zM4 10h2v2H4zM7 10h2v2H7zM10 7h2v2h-2zM10 10h2v2h-2z" />
        </g>
      )
    case 'calendar-time':
      return (
        <g {...props} fillRule="evenodd">
          <path
            fillRule="nonzero"
            d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 12H2V5h12v9z"
          />
          <path d="M11 11H7V7h2v2h2z" />
        </g>
      )
    case 'information-welcome':
      return (
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)">
            <circle cx={13} cy={13} r={13} {...props} />
            <path
              fill="#FFF"
              d="M10 10.75h4.314v7.07h1.336v2.541H10V17.82h1.447v-4.527H10V10.75zm1.299-3.099c0-.228.042-.443.125-.644a1.602 1.602 0 0 1 .872-.877c.201-.087.42-.13.654-.13.223 0 .433.043.631.13a1.664 1.664 0 0 1 1.002 1.521 1.664 1.664 0 0 1-1.002 1.521c-.198.087-.408.13-.63.13a1.635 1.635 0 0 1-1.179-.482 1.602 1.602 0 0 1-.348-.524 1.664 1.664 0 0 1-.125-.645z"
            />
          </g>
          <path
            {...props}
            fillRule="nonzero"
            d="M14 28C6.268 28 0 21.732 0 14S6.268 0 14 0s14 6.268 14 14-6.268 14-14 14zm0-2c6.627 0 12-5.373 12-12S20.627 2 14 2 2 7.373 2 14s5.373 12 12 12z"
          />
        </g>
      )
    case 'information-gmt':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm2.658 18.284c-.661.26-2.952 1.354-4.272.191a1.676 1.676 0 0 1-.59-1.318c0-.998.328-1.868.919-3.957.104-.395.231-.907.231-1.313 0-.701-.266-.887-.987-.887-.352 0-.742.125-1.095.257l.195-.799c.787-.32 1.775-.71 2.621-.71 1.269 0 2.203.633 2.203 1.837 0 .347-.06.955-.186 1.375l-.73 2.582c-.151.522-.424 1.673-.001 2.014.416.337 1.401.158 1.887-.071l-.195.799zM13.452 8a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 13.452 8z"
        />
      )
    case 'letter':
      return (
        <g {...props} fillRule="evenodd">
          <path d="M15 2H1c-.6 0-1 .4-1 1v1.4l8 4.5 8-4.4V3c0-.6-.4-1-1-1z" />
          <path d="M7.5 10.9L0 6.7V15c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V6.7l-7.5 4.2c-.28.14-.72.14-1 0z" />
        </g>
      )
    case 'phone':
      return (
        <path
          {...props}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 10l-2 2-6-6 2-2-3-3-2 2c0 6.627 5.373 12 12 12l2-2-3-3z"
        />
      )
    case 'arrow':
      return (
        <path
          {...props}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 4l4.5 4.5L6 13"
        />
      )
    case 'arrow-back':
      return (
        <path
          {...props}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.5 12L5 7.5 9.5 3"
        />
      )
    case 'arrow-big':
      return (
        <path
          {...props}
          fillRule="evenodd"
          d="M8.106 12.235a.934.934 0 0 1-.611-.227L.212 5.75l1.222-1.43 6.672 5.735 6.672-5.735L16 5.75l-7.283 6.258a.934.934 0 0 1-.611.227z"
        />
      )
    case 'arrow-down':
      return (
        <path
          {...props}
          fillRule="evenodd"
          d="M8 11.4L2.6 6 4 4.6l4 4 4-4L13.4 6z"
        />
      )
    case 'close':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M10.678.334a1.099 1.099 0 0 0-1.553 0L5.507 3.952 1.889.334A1.099 1.099 0 0 0 .335 1.887l3.618 3.618L.335 9.123a1.099 1.099 0 1 0 1.554 1.554l3.618-3.618 3.618 3.618a1.099 1.099 0 0 0 1.553-1.554L7.06 5.505l3.618-3.618a1.099 1.099 0 0 0 0-1.553z"
        />
      )
    case 'in-progress':
      return (
        <path
          {...props}
          fillRule="evenodd"
          d="M5 1h6.792a1 1 0 0 1 .751 1.66L10.49 5l2.044 2.308a1 1 0 0 1-.745 1.663L5 8.993V14c0 .667-.336 1-1.008 1-.672 0-1.002-.333-.992-1V2a1 1 0 0 1 1-1h1z"
        />
      )
    case 'opened':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M10.005 7V4.1c0-.71-.581-1.35-1.605-1.35S7.005 3.29 7.005 4c0 .67-.333 1.005-.998 1.005-.666 0-1-.335-1-1.004C5.007 2.253 6.442 1 8.4 1 10.358 1 12 2.353 12 4.1V7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6.005z"
        />
      )
    case 'blocked':
    case 'blocked pending':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M6 7h4.018V4.1c0-.71-.555-1.35-2.018-1.35-1.463 0-2 .64-2 1.35V7zm6.02 0A1 1 0 0 1 13 8v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 .992-1V4.1C3.992 2.354 6.042 1 8 1c1.958 0 4.02 1.353 4.02 3.1V7z"
        />
      )
    case 'blocked isTest':
      return (
        <g {...props}>
          <path
            fillRule="nonzero"
            d="M3.5 7h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"
          />
          <path d="M2.5 4h11v2h-11z" />
          <path d="M5.5 2a1 1 0 0 1 1 1v2h-2V3a1 1 0 0 1 1-1zM10.5 2a1 1 0 0 1 1 1v2h-2V3a1 1 0 0 1 1-1z" />
        </g>
      )
    case 'completed':
    case 'done':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M13.173 3.325L6.34 10.327 3.852 7.775a1.067 1.067 0 0 0-1.522.014 1.133 1.133 0 0 0-.013 1.56l3.257 3.338a1.067 1.067 0 0 0 1.535 0l7.599-7.79a1.133 1.133 0 0 0-.014-1.559 1.067 1.067 0 0 0-1.521-.013z"
        />
      )
    case 'timelineArrow':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M.47 8.341c0-.218.076-.434.227-.611L6.957.447l1.429 1.222L2.65 8.341l5.735 6.672-1.43 1.222L.697 8.952a.934.934 0 0 1-.226-.61z"
        />
      )
    case 'map-indicator':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M7 0C3.1 0 0 3.1 0 7c0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.3 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 .1-3.9-3-7-6.9-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
        />
      )
    case 'goback-courses':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M5.926 0L0 6l5.926 6L8 9.9 4.148 6 8 2.1z"
        />
      )
    case 'show-welcome':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z"
        />
      )
    case 'play-video':
      return (
        <g fill="none" fillRule="evenodd">
          <circle
            cx="11"
            cy="11"
            r="10"
            stroke={props.stroke}
            strokeWidth="2"
          />
          <path fill={props.fill} d="M9 15V7l6 4z" />
        </g>
      )
    case 'download':
      return (
        <g {...props} fillRule="evenodd">
          <path d="M7 12c.3 0 .5-.1.7-.3L13.4 6 12 4.6l-4 4V0H6v8.6l-4-4L.6 6l5.7 5.7c.2.2.4.3.7.3zM0 14h14v2H0z" />
        </g>
      )
    case 'clock':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H7V4h2v3h3v2z"
        />
      )
    case 'close-modal':
      return (
        <path
          {...props}
          fillRule="evenodd"
          d="M19 .171l-8 8-8-8L.171 3l8 8-8 8L3 21.829l8-8 8 8L21.829 19l-8-8 8-8z"
        />
      )
    case 'audio':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M8 0C3.589 0 0 3.589 0 8v5c0 1.654 1.346 3 3 3h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H2V8c0-3.309 2.691-6 6-6s6 2.691 6 6v1h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1c1.654 0 3-1.346 3-3V8c0-4.411-3.589-8-8-8z"
        />
      )
    case 'video':
      return (
        <path
          {...props}
          fillRule="nonzero"
          d="M15 0H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-4.4 8.8l-4 3c-.6.5-1.6 0-1.6-.8V5a1 1 0 0 1 1.6-.8l4 3c.5.4.5 1.2 0 1.6z"
        />
      )
    case 'reading':
      return (
        <g {...props} fillRule="nonzero">
          <path d="M5 6H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1zM8 0h8v2H8zM8 4h8v2H8zM0 8h16v2H0zM0 12h16v2H0z" />
        </g>
      )
    case 'multimedia':
      return (
        <g {...props} fillRule="nonzero">
          <circle cx="3" cy="3" r="3" />
          <circle cx="11" cy="3" r="3" />
          <circle cx="3" cy="11" r="3" />
          <circle cx="11" cy="11" r="3" />
        </g>
      )
    case 'edit':
      return (
        <g {...props} fillRule="nonzero">
          <path d="M0 14h16v2H0zM11.7 3.3c.4-.4.4-1 0-1.4L10.1.3c-.4-.4-1-.4-1.4 0L0 9v3h3l8.7-8.7z" />
        </g>
      )
    case 'circularCheck':
      return (
        <g {...props} fillRule="nonzero">
          <rect
            width="17"
            height="17"
            fill={UIVars.setColors.checkGreen}
            rx="8.5"
          />
          <path
            fill="#FFF"
            fillRule="nonzero"
            d="M7.125 10.531l5.385-5.385 1.097 1.097-6.364 6.364L3 8.364l.98-.98z"
          />
        </g>
      )
    case 'circularError':
      return (
        <g {...props} fillRule="nonzero">
          <rect
            width="17"
            height="17"
            fill={UIVars.setColors.checkError}
            rx="8.5"
          />
          <g stroke="#FFF" strokeLinecap="square" strokeWidth="1.5">
            <path d="M5.474 5.555l6.24 5.941M5.34 11.544l6.035-6.153" />
          </g>
        </g>
      )
    case 'academic_historial':
      return (
        <g {...props} fillRule="nonzero">
          <path d="M0 0h4v4H0zM6 0h4v4H6zM12 0h4v4h-4zM0 6h4v4H0zM6 6h4v4H6zM12 6h4v4h-4zM0 12h4v4H0zM6 12h4v4H6zM12 12h4v4h-4z" />
        </g>
      )
    case 'menuListItems':
      return (
        <g {...props} fillRule="nonzero">
          <path d="M6 1h10v2H6zM6 7h10v2H6zM6 13h10v2H6zM3 0H1C.4 0 0 .4 0 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM3 6H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zM3 12H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1z" />
        </g>
      )
    case 'arrow-top-right':
      return (
        <g {...props} fillRule="nonzero">
          <path d="M6.793 2.793L.586 9 2 10.414l6.207-6.207L11 7V0H4z" />
        </g>
      )
    case 'bullet-list':
      return (
        <g {...props} fillRule="nonzero">
          <path d="M6 1h10v2H6zM6 7h10v2H6zM6 13h10v2H6zM3 0H1C.4 0 0 .4 0 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM3 6H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zM3 12H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1z" />
        </g>
      )
    case 'window-paragraph':
      return (
        <g {...props} fillRule="nonzero">
          <path d="M5 6H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1zM8 0h8v2H8zM8 4h8v2H8zM0 8h16v2H0zM0 12h16v2H0z" />{' '}
          />
        </g>
      )
    default:
      return <path />
  }
}

// @Component
/**
 * Este componente se encarga de dibujar todos los íconos svg pequeños de la app.
 * Los íconos más elaborados, tienen un archivo exclusivo para cada uno, por ejemplo
 * los de Ranking.
 */
const Icon = ({
  name = '',
  style = {},
  fill = 'none',
  stroke = '',
  className = '',
  width = 16,
  height,
  onClick,
  viewBox,
  testid
}) => {
  if (UIVars.setColors[fill]) {
    fill = UIVars.setColors[fill]
  }

  return (
    <StyledSVG
      data-testid={testid}
      onClick={onClick}
      width={width}
      style={style}
      height={height}
      viewBox={getViewBox(viewBox, width, height)}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      {getPath(name, { fill, stroke })}
    </StyledSVG>
  )
}

// @Export Styled Component
const StyledSVG = styled.svg`
  flex-shrink: 0;
  margin-right: ${({ className }) =>
    className && className.split(' ').includes('arrow-icon') ? 0 : '10px'};
  height: ${({ height, width }) => (height ? `${height}px` : `${width}px`)};
  width: ${({ width }) => (width ? `${width}px` : '16px')};
`

// @PropTypes
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  viewBox: PropTypes.number,
  onClick: PropTypes.func
}

export { Icon }
