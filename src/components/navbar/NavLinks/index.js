import React from 'react';
import {Item, ItemLink} from './style';


const NavLink = (props) =>{
    return (
        <>


        <Item>

             <ItemLink to={props.route} COLOR={props.color} SIZE={props.size}> {props.children}</ItemLink>
        
         </Item>

       </>
      
    );
};

export default NavLink;