import React, { useState } from 'react'
import { Wrapper } from './styles'
import { Input, Label } from 'reactstrap'
import { Icon } from '../UI/Icons'
import classNames from 'classnames'


const InputText = ( {disabled, autoFocus, type, placeholder, label }) => {
    const [valueInput, setValueInput] = useState('')
    const [icon, setIcon] = useState(null)
    const [borderValid, setBorderValid] = useState(false)
    const [borderInvalid, setBorderInvalid] = useState(false)

    let timer;
    const interval = 1000;
    
    const validateInput = (typeValidation, value) => {
        switch (typeValidation) {
            case 'phone':
                return validation('^([+])?([0-9]{1,20})$', value, "Debe ingresar sólo números")
            case 'email':
                return validation('^.+@[^\.].*\.[a-z]{2,}$', value, "Debes llenar este campo con email válido")//eslint-disable-line
            case 'alphabetic':
                return validation('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]+$', value, "Debe contener sólo valores alfabéticos")
            default:
                return null
        }
    }
    
    const validation = (regex, value, message) => {
        clearTimeout(timer)
        if(value.match(regex)){
            timer = setTimeout( () => {setIcon(<div className="valid_feedback" ><Icon width={17} fill="#ffff" name="circularCheck"></Icon>Correcto</div>); setBorderValid(true)
            setBorderInvalid(false) }, interval)
        }
        else if (value === ""){
            timer = setTimeout( () => {setIcon(<div className="invalid_feedback" ><Icon width={17} fill="#ffff" name="circularError"></Icon>Este campo es obligatorio</div>); setBorderValid(false)
            setBorderInvalid(true) }, interval)
        }
        else{
            timer = setTimeout( () => {setIcon(<div className="invalid_feedback" ><Icon width={17} fill="#ffff" name="circularError"></Icon>{message}</div>); setBorderValid(false)
            setBorderInvalid(true) }, interval)
        }
    }

    return (
        <Wrapper>
            <Label for="exampleEmail" className={classNames( disabled ? 'gray' : '')}> {label}</Label>
                <Input 
                    value={valueInput}
                    onChange={(e) => { setValueInput(e.target.value) ;}}
                    onKeyUp={(e) => { clearTimeout(timer) ; validateInput(type, e.target.value)}}
                    onKeyDown={clearTimeout(timer)}
                    onBlur={clearTimeout(timer) }
                    autoFocus={autoFocus || false} 
                    placeholder={placeholder}
                    className={classNames({
                        borderRed: borderInvalid,
                        borderGreen : borderValid
                    })}
                    disabled={disabled || false} />
                {icon}
        </Wrapper>
    )
}


export default InputText