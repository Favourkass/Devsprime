import React from 'react';
import InputWithButton from '../../inputWithButton';
import {Wrapper, Text} from './style';
import {Header, Paragraph} from '../../typography/index'

const NewsLetterSubscription = () =>{
        
    return(

            <Wrapper>
               <Text>
                    <div className='head'>
                        <Header size='39'>
                            Subscribe to Our News Letter
                        </Header>
                    </div>
                    <div className='para'>
                        <Paragraph size='20px'>
                        Get exclusive discounts and latest news deliverd to your inbox for free!
                        </Paragraph>
                    </div>

               </Text>
                <InputWithButton
                
                placeholder="Email"
                inputType=''
                inputValue=''
                handleChange=''
                buttonName='Submit'
                handleClick=''   
                
                  />
            </Wrapper>
        )
}

export default NewsLetterSubscription