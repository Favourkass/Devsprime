import React, { useState } from 'react'
import CardElement from './dropDownCardElement'
import { Card } from '../style'


const DropDownCard = (props)=>{
    const [dropLink] = useState([
                 {
                    name:'Courses',
                    url:'/dashboard'
                 },
                 {
                    name:'Orders',
                    url:'/dashboard/order'
                 },
                
                 {
                     name:'Log-Out',
                     url:'/login'
                 }
            ])

    return(
        <>
             <Card active={props.active} >
                
               {dropLink.map((link, index) =>{
                    return(
                         <CardElement key={index} elementName={link.name} elementUrl={link.url}/>
                    ) 
                 })}
             </Card>
             </>
    )
}


export default DropDownCard