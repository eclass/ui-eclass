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
    border: solid 2px ${variables.setColors.deepSkyBlue};
    outline: 0;
    box-shadow: none
}

.valid_feedback{
    color: ${variables.setColors.jadeGreen};
    display: flex;
    margin-top: 4px;
    align-items: center;
    font-size: 12px;
}

.invalid_feedback{
    color: ${variables.setColors.red};
    display: flex;
    margin-top: 4px;
    align-items: center;
    font-size: 12px;
}

.borderGreen{
    border: solid 2px ${variables.setColors.jadeGreen}
}
.borderGreen:focus{
    border: solid 2px ${variables.setColors.jadeGreen}
}
.borderRed{
    border: solid 2px ${variables.setColors.red};
}
.borderRed:focus{
    border: solid 2px ${variables.setColors.red};
}

`


export { Wrapper }