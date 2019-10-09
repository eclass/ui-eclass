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

.form-control.is-invalid{
    background-image: none;
}

.feedback-check{
    color: ${variables.setColors.jadeGreen};
}

.feedback-error{
    color: ${variables.setColors.red};
}
.form-control.valid{
    background-image: none;
    :focus{
        border: solid 1px green;
    }
}
.border-check{
    border: solid 1px ${variables.setColors.brownGreyTwo}
}
.border-error{
    border: solid 1px red;
}

`


export { Wrapper }