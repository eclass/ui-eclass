import styled from 'styled-components'
import variables from '../variables'


const Wrapper = styled.div`

select {
    width: 400px;
    height: 44px;
}

.form-control:focus{
    color: #495057;
    background-color: #fff;
    border: solid 2px ${variables.setColors.deepSkyBlue};
    outline: 0;
    box-shadow: none
}
::placeholder{
    color: ${variables.setColors.brownGreyTwo}
}

label {
    font-size: 14px;
    font-weight: bold;
}

`


export { Wrapper }