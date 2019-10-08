import styled from 'styled-components'
import variables from '../variables'
import { 
  buttonActionColor,
  buttonBackground,
  buttonBorder,
  buttonSize,
  buttonColor,
  isDisabled,
  } from './Button'


const StyledButton = styled.button`
  background: ${props => buttonBackground(props)};
  border: none;
  border-radius: 4px;
  color: ${props => buttonColor(props)};
  margin-right: 10px;
  overflow: hidden;
  padding: 0;
  transition: all 0.25s;
  
  &:hover {
    ${props => buttonActionColor('hover', props)}
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  }
  &:active,
  &:focus {
    outline: none;
  }
  
  &[disabled] {
    background: ${variables.setColors.veryLightPink};
    border-color: ${variables.setColors.veryLightPink};
    cursor: no-drop;
    ${props => isDisabled(props)}
    .button__container {
      ${props => isDisabled(props)}
    }
    &:hover {
      box-shadow: none;
    }
    &:hover,
    &:active {
      background: ${props =>
        !props.border ? variables.setColors.veryLightPink : 'transparent'};
      .button__container {
        ${props => isDisabled(props)}
      }
    }
  }
  
  .button__container {
    align-items: center;
    display: flex;
    justify-content: center;
    ${props => buttonSize(props.size, props.text)}
    padding: ${({ text }) => (text ? '0 10px' : '0')};
    text-align: center;
    ${props => buttonBorder(props)};
    border-radius: 4px;
  }
`

const StyledIcon = styled.span`
  line-height: 0;
  margin-right: ${props => (props.icon && props.text ? '5px' : '0')};
  vertical-align: middle;
`

export { StyledIcon, StyledButton}