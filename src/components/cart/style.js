import styled from 'styled-components'
import Button from '../button'
import { Link } from 'react-router-dom'


export const CartWrapper = styled.div`
    background-color: #FFF7DF;
    width: 100%;
    border-radius: 10px;
    
`

export const AllDiv = styled.table`
    padding-top: 30px;
    padding-bottom: 20px;
    margin: 0;
    width: 100%;
    table-layout: fixed;
    & thead>tr>th{
        padding-bottom: 20px;
    }
   
`

export const TopDiv = styled.thead`    
 
`
export const TableRow = styled.tr`
    

`
export const ParagraphDiv =styled.th`
    
`
export const MidDiv =styled.tbody`

@media only screen and (max-width:450px){
    
}
        
` 
export const TableDetail = styled.td`
text-align: center;
border-top: solid 1px #E5E5E5;
border-bottom: solid 1px #E5E5E5;

`
export const SectionDiv = styled.div`
margin-left: 10px;
margin-top: 10px;
text-align:justify

`
export const ImageParagraphDiv = styled.div`
    display: flex;
    @media only screen and (max-width: 768px){
        display: block;
}

`
export const MidParagraph = styled.div`

`
export const TitleParagraph = styled.p`
    font-weight: bold;
`
export const ContentParagraph = styled.p`
    display: block;
    

`

export const ImageWraped = styled.img`
    width:156px;
    height:133px;
    background-color: #5C5C5C;
    left:132px;
    border-radius: 10px;
    @media only screen and (max-width: 768px){
        width:110px;
        height:100px;
}
       
`
export const SpanDiv = styled.span`

`
export const EndingOfMid = styled.div`

`


export const BottomDiv = styled.div`
   position: relative;
   right: -75%;
   padding-bottom: 10px;
    justify-content: flex-end;
    @media only screen and (max-width: 768px){
        right: -50%;
        
}

`
export const BottomContainer = styled.p`
   
`


export const BottomSpanFixed = styled.div`

`

const ReuseableButtonLabel =({label, content}) =>{
    return(
        <BottomSpanFixed>
            <span style={{color:'gray'}}>{label}</span>
            <span>{content}</span>
        </BottomSpanFixed>
    )
}
export const ReuseableButtonContent =({total, cartId}) =>{
    return(
        <BottomDiv>
            <BottomContainer>
            <ReuseableButtonLabel label ={'Total: '} content ={total}            />
            </BottomContainer>
        
            <BottomContainer>
            <Link
            to={{
            pathname: `/payment/${cartId}`
            }}
            >
            <Button primary medium>Buy</Button>
            </Link>
            </BottomContainer>
        </BottomDiv>
    )
}


const ReuseableContentParagraph =({label, content}) =>{
    return(
        <ContentParagraph>
        {label}{content}
    </ContentParagraph>
    )
}

export const ItemSection =({image,title, instructor, date}) =>{
    return(
        <ImageParagraphDiv>
            <SectionDiv><ImageWraped src={image} alt ={title}/></SectionDiv>
             <SectionDiv><TitleParagraph> {title}</TitleParagraph>
            <ReuseableContentParagraph label={'Instructor: '} content={instructor}/>
           <ReuseableContentParagraph content={date}/>
           </SectionDiv>
        </ImageParagraphDiv>

    )
}