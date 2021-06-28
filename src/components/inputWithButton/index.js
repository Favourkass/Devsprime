import React from 'react'
import Button from './button'
import Input from './input'
import { FormWrapper } from './style'



function InputWithButton({placeholder, inputType, inputValue, buttonType, handleChange, handleClick, buttonName}){
    return(
        <FormWrapper >
            <Input 
                type={inputType} 
                value={inputValue} 
                handleChange={handleChange}
                placeholder={placeholder} />
            <Button 
                type={buttonType} 
                name={buttonName}  
                handleClick={handleClick}/>
        </FormWrapper>
    )
}


export default InputWithButton