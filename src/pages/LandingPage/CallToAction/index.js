import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Paragraph } from '../../../components/typography'
import {
    Container,
    ImageDiv,
    TextDiv,
    ImageContent,
} from './style'
import Button from '../../../components/button'

const LetsTalk = ()=>{

    return <><Container>
        <ImageDiv>
            <ImageContent>
                
            </ImageContent>
        </ImageDiv>

        <TextDiv>
            <Header>Let's build <br/> Something <br/> Great Together</Header>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sapiente facilis eum, pariatur doloremque voluptatum ea! Accusamus expedita 
            </Paragraph>
            <Link to="/contact">
                <Button primary>Let's Talk!</Button>
            </Link>
        </TextDiv>

    </Container>
    </>
}

export default LetsTalk;