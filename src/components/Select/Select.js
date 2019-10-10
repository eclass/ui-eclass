import React, { useState} from 'react'
import { Wrapper } from './styles'
import { Input, Label } from 'reactstrap'
import classNames from 'classnames/bind';
import { stre } from '../UI/svg'


const Select = ({ disabled, label, placeholder, data }) => {
 const [isOpen, setIsOpen] = useState(false)
    return (
        <Wrapper>
            <Label for="exampleSelect">{label}</Label>
            <Input  type="select" name="select"   id="exampleSelect" disabled={disabled || false}>
                <option value="" >{placeholder} 
                {/* <img
                    className={classNames(
                      isOpen ? 'up' : 'down')}
                    src={stre}
                    alt="arrow"
                />  */}
                </option>
                {data ? data.map( (region, key) => { 
                    return <option key={key}>{region.region}</option>
                }) : null}
            </Input>
        </Wrapper>
    )
}

export default Select