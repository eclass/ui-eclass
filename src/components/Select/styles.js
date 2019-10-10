import styled from 'styled-components'
import variables from '../variables'
import { stre } from '../UI/svg'


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
select.form-control {
    
    background-image: url(${stre});
    background-repeat: no-repeat;
    background-position: 370px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
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