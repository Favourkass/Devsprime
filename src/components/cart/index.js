import React from 'react';
import { CartWrapper, 
    TopDiv,
    ParagraphDiv, 
    MidDiv, 
    SpanDiv, EndingOfMid,
    ItemSection,ReuseableButtonContent,
    AllDiv,TableRow,TableDetail} from './style';




function Cart(props){
   
    return (
        <CartWrapper>
            <AllDiv>

            <TopDiv>
                <TableRow>
                    <ParagraphDiv>
                    Product Name & Details
                    </ParagraphDiv>
                    
                    <ParagraphDiv>
                    Price
                    </ParagraphDiv>
                    <ParagraphDiv>
                    Course Type
                    </ParagraphDiv>
                </TableRow>
            </TopDiv>
            <MidDiv>
                <TableRow>
                <TableDetail>
                <ItemSection
                image = {props.image}
                title ={props.title}
                instructor={props.instructor}
                module={props.module}
                date={props.date}

                />
                
                </TableDetail>
               
                <TableDetail>
                <SpanDiv>
                    {props.price}
                </SpanDiv>
                </TableDetail>
                <TableDetail>
                <EndingOfMid>                   
                    <b>{props.type}</b>                
                </EndingOfMid>
                </TableDetail>

                </TableRow>
            </MidDiv>
            
            </AllDiv>
            <ReuseableButtonContent
                total={props.total}
                cartId={props.cartId}
            />
        </CartWrapper>



    )
}

export default Cart;