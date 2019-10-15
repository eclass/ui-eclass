import styled from 'styled-components'
import variables from '../variables'
import Close from '../../components/UI/svg/cerrar-definicion.svg'



const Wrapper = styled.div`
    .Timeline__tooltip, .tooltip {
    font-size: 12px;
    z-index: 10;
    &.show{
      opacity: 1;
    }
    &.Timeline__tooltip {
      .tooltip-inner{
        background-color: black;
        border-radius: 10px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.17);
        color: white;
        font: 12px 'Roboto';
        font-weight: 400;
        padding: 6px 10px;
        min-width: 200px;
        // top: 13px!important;
        width: 200px;

        &:before {
          display: none;
        }

        strong {
          font-weight: 500;
        }

        strong, div {
          position: relative;
          z-index: 10;
        }
      }

      .arrow {
        // bottom: -13px;
        // left: 92px !important;

        &:before {
          background: black;
        }
      }
    }
    .tooltip-inner{
      background: ${variables.setColors.whiteTwo};
      border-radius: 5px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.17);
      color: ${variables.setColors.blackTwo};
      min-width: 250px;
      padding: 20px;
      position: relative;
      text-align: left;
      strong{
        display: block;
        margin-bottom: 5px;
      }
      :before{
        content: url(${Close});
        cursor: pointer;
        right: 10px;
        position: absolute;
        top: 10px;
      }
    }
    .arrow:before{
      background: ${variables.setColors.whiteTwo};
      border:0;
      box-shadow: 3px 3px 3px 0 rgba(0,0,0,0.1);
      content: '';
      display: block;
      height: 16px;
      left: 0;
      position: absolute;
      top: -10px;
      transform:rotate(45deg);
      width: 16px;
      z-index:1;
    }
    &.bs-tooltip{
      &-top{
        top: -4px!important;
      }
      &-bottom{
        top: 4px!important;
        .arrow{
          :before{
            top: 0;
            box-shadow: none;
          }
        }
      }
    }
  }
`


export { Wrapper }