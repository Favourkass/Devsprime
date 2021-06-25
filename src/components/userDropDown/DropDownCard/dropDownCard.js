import React, { useState } from 'react'
import CardElement from './dropDownCardElement'
import { Card } from '../style'


const DropDownCard = (props)=>{
    const [dropLink, setDropLink] = useState([
                 {
                    name:'Courses',
                    url:'/courses'
                 },
                 {
                    name:'Orders',
                    url:'/orders'
                 },
                 {
                     name:'Settings',
                     url:'/settings'
                 },
                 {
                     name:'Log-Out',
                     url:'/logout'
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