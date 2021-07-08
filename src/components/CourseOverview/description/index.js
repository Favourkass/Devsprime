import React from 'react';
import {Wrapper} from './style';
import {SubHeader, Paragraph} from '../../typography/index';

const Description = ({description, created_at}) =>{
    return(
        <Wrapper>
            <SubHeader> Description</SubHeader>
            <Paragraph lineHeight='24.61px'>
                {description}
            </Paragraph>

            <table>
                <tr>
                <th>Released Date:</th>
                <td>01/02/2021</td>
                </tr>
                <tr>
                <th>Duration:</th>
                <td>1hr 50mins 00secs</td>
                </tr>
                <tr>
                <th>Tags:</th>
                <td>Modelling, Rendring, Animation</td>
                </tr>   
            </table>

        </Wrapper>
    )
}

export default Description;