import * as React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DelayLink = ({
  children,
  to,
  delay,
  history,
  external,
  className,
  disabled
}) => {
  const handleClick = e => {
    if (disabled) {
      e.preventDefault()
    } else {
      const newDelay = delay || (external ? 1000 : 50)
      e.preventDefault()
      setTimeout(() => {
        if (external) {
          // eslint-disable-next-line security/detect-non-literal-fs-filename
          window.open(to, '_blank')
        } else {
          history.push(to)
        }
      }, newDelay)
    }
  }

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}

// @Proptypes
DelayLink.propTypes = {
  className: PropTypes.string,
  delay: PropTypes.number,
  external: PropTypes.bool,
  children: PropTypes.string,
  to: PropTypes.string,
  history: PropTypes.string,
  disabled: PropTypes.bool
}

export default styled(withRouter(DelayLink))`
  display: block;
  height: 100%;
`
