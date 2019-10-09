import React, { useState } from 'react'
import { Wrapper } from './styles'
import { Input, Label } from 'reactstrap'
import { Icon } from '../UI/Icons'
import classNames from 'classnames'


const InputText = ( {disabled, autoFocus, type, valid, invalid}) => {
    const [valueInput, setValueInput] = useState('')
    const [validInput, setValidInput] = useState(null)
    const [invalidInput, setInvalidInput] = useState(null)
    const [icon, setIcon] = useState(null)


    
    const validateInput = (typeValidation, value) => {
        switch (typeValidation) {
            case 'phone':
                return validation('^[0-9]+$', value)
            case 'name':
                return validation('^[a-zA-Z]+$', value)
            default:
                return null
        }
    }
    
    const validation = (regex, value) => {
        if(value.match(regex)){
            console.log("valid")
            setValidInput(true)
        }
        else{
            setInvalidInput(true)
            console.log("invalido")
        }
    }

    return (
        <Wrapper>
            <Label for="exampleEmail"> Etiqueta</Label>
                <Input 
                    value={valueInput}
                    onChange={(e) => {setValueInput(e.target.value); validateInput(type, e.target.value)}}
                    autoFocus={autoFocus || false} 
                    placeholder="Placeholder"
                    invalid={invalid || false}
                    valid={valid || false}
                    disabled={disabled || false} />
                {<div
                className={classNames({
                    Hidden__Message: validInput,
                    Error__Message: true,
                    Error__Icon : true,
                    Error__Icon__hidden: true
                })}>
                {"campo requerido"}
            </div>}
        </Wrapper>
    )
}




export default InputText