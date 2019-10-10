import React from 'react'
import { Wrapper } from './styles'
import { Input, Label } from 'reactstrap'



const Select = ({ disabled, label, placeholder, data }) => {

    return (
        <Wrapper>
            <Label for="exampleSelect">{label}</Label>
            <Input type="select" name="select"   id="exampleSelect" disabled={disabled || false}>
                <option value="" >{placeholder} </option>
                {data ? data.map( (region, key) => { 
                    return <option key={key}>{region.region}</option>
                }) : null}
            </Input>
        </Wrapper>
    )
}

export default Select