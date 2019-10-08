import React from 'react'
import { Wrapper } from './styles'
import { Input, Label } from 'reactstrap'

const InputText = ( {disabled, autoFocus, type}) => {
    return (
        <Wrapper>
            {/* <AvForm>
                <AvField name="name" label={"Etiqueta"} type="text" errorMessage="Este campo es incorrecto" placeholder={'Input box'} validate={{
                    required: {value: false},
                    pattern: {value: '^[A-Za-z0-9]+$'},
                    minLength: {value: 6},
                    maxLength: {value: 16}
                }} />
            </AvForm> */}
            <Label for="exampleEmail"> Etiqueta</Label>
            <Input autoFocus={autoFocus ? autoFocus : false} placeholder="Placeholder" disabled={disabled ? disabled : false}/>
        </Wrapper>
    )
}

const getPattern = (type) => {
    switch (type) {
        case 'phone':
            return console.log("phone")
        case 'name':
            return console.log("name")
        default:
            return console.log("default")
        break;
    }
}

export default InputText