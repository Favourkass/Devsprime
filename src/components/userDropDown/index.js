import React, {useState} from 'react'

import UserIcon from './UserImage/userIcon'
import DropDownCard from './DropDownCard/dropDownCard'


const UserDropDown = (props)=>{
    const [active, setActive] = useState(false)

    function handleActive(){
        setActive(!active)
    }

    return(
        <div>
            <UserIcon handleClick={handleActive} imgSrc={props.imgSrc} />
            <DropDownCard active={active} />
         </div>
    )
}

export default UserDropDown