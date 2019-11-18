import { createGlobalStyle } from 'styled-components'
import variables from '../src/components/variables'
import Close from '../src/components/UI/svg/cerrar-definicion.svg'


const GlobalStyle = createGlobalStyle`
font-family: 'Roboto', sans-serif;
.tooltip {
    .tooltip-inner{
        font-size: 11px;
        font-weight: 300 !important;
        border-radius: 10px;
        padding: 6px 10px;
        text-align: left !important;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.17);
        
        strong {
        font-weight: 500;
        }
    }
}

`
export default GlobalStyle