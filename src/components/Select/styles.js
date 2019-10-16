import styled from 'styled-components'
import variables from '../variables'
import { stre } from '../UI/svg'

const Wrapper = styled.div`
  height: 97px;
  select {
    width: 400px;
    height: 44px;
  }

  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border: solid 2px ${variables.setColors.deepSkyBlue};
    outline: 0;
    box-shadow: none;
  }

  .form-control:disabled {
    color: ${variables.setColors.veryLightPink};
  }

  select.form-control {
    font-family: 'Roboto', sans-serif;
    background-image: url(${stre});
    background-repeat: no-repeat;
    background-position: 370px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    overflow: hidden;
    color: ${variables.setColors.black};
    :before {
      -webkit-transform: rotate(deg);
      transform: rotate(90deg);
    }
  }
  .valid_feedback {
    color: ${variables.setColors.jadeGreen};
    display: flex;
    margin-top: 4px;
    align-items: center;
    font-size: 12px;
  }

  .invalid_feedback {
    color: ${variables.setColors.red};
    display: flex;
    margin-top: 4px;
    align-items: center;
    font-size: 12px;
  }

  .borderGreen {
    border: solid 2px ${variables.setColors.jadeGreen};
  }
  .borderGreen:focus {
    border: solid 2px ${variables.setColors.jadeGreen};
  }
  .borderRed {
    border: solid 2px ${variables.setColors.red};
  }
  .borderRed:focus {
    border: solid 2px ${variables.setColors.red};
  }

  ::placeholder {
    color: ${variables.setColors.brownGreyTwo};
  }

  label {
    font-size: 14px;
    font-weight: bold;
  }
  .gray {
    color: ${variables.setColors.brownGreyTwo};
  }
`

export { Wrapper }
