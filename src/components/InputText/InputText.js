import React, { useState } from 'react'
import { Wrapper } from './styles'
import { Input, Label } from 'reactstrap'
import { Icon } from '../UI/Icons'


const InputText = ( {disabled, autoFocus, type}) => {
    const [valueInput, setValueInput] = useState('')
    const [validInput, setValidInput] = useState(null)
    const [invalidInput, setInvalidInput] = useState(null)
    const [icon, setIcon] = useState(null)


    function delay(callback, ms) {
        var timer = 0;
        return function() {
          var context = this, args = arguments;
          clearTimeout(timer);
          timer = setTimeout(function () {
            callback.apply(context, args);
          }, ms || 0);
        };
      }

    
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
            setIcon(<div className="feedback-check">
                        <Icon 
                            width={17} 
                            fill="#ffff" 
                            name="circularCheck" />
                            todo bien
                    </div>)
        }
        else{
            setInvalidInput(true)
            setIcon(<div className="feedback-error">
                        <Icon 
                            width={17} 
                            fill="#ffff" 
                            name="circularError" />
                            error
                    </div>)
            console.log("invalido")
        }
    }
    
    return (
        <Wrapper>
            <Label for="exampleEmail"> Etiqueta</Label>
                <Input 
                    value={valueInput}
                    onChange={(e) => {setValueInput(e.target.value); validateInput(type, e.target.value)}}
                    autoFocus={autoFocus ? autoFocus : false} 
                    placeholder="Placeholder"
                    disabled={disabled ? disabled : false} />
                {icon}
        </Wrapper>
    )
}




export default InputText