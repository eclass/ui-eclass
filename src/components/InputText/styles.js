import styled from 'styled-components'
import variables from '../variables'



const Wrapper = styled.div`
 label{
     font-size: 14px;
     font-weight: bold;
 }
 input{
     height: 44px;
     width: 400px;
     color: ${variables.setColors.brownGreyTwo}
    &[disabled] {
    cursor: no-drop;
    }
 }
 ::placeholder{
    color: ${variables.setColors.brownGreyTwo}
 }
 .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: ${variables.setColors.deepSkyBlue};
    outline: 0;
    box-shadow: none
}

`


export { Wrapper }