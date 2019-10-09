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

.was-validated .form-control:invalid, .form-control.is-invalid{
    background-image: none;
    :focus{
        border: solid 1px ${variables.setColors.red};
    }
}

.feedback-check{
    color: ${variables.setColors.jadeGreen};
}

.feedback-error{
    color: ${variables.setColors.red};
}
.was-validated .form-control:valid, .form-control.is-valid{
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

.Error__Icon{
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"><circle cx="15" cy="15" r="10" /></svg>');
}
.Error__Icon__hidden{
    background-image: none;
}


.Error__Message {
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
    }

.Hidden__Message {
    display: none !important;
}

`


export { Wrapper }