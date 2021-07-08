import React from 'react';
import {Nav, ElementWrapper} from './style';
import NavLink from '../../navbar/NavLinks/index';

const CourseNav = () => {

    return (
        <Nav>
            <ElementWrapper>
                <NavLink route='/' color='#FFFFFF' size='20px'>Overview</NavLink>
                <NavLink route='/' color='#FFFFFF' size='20px'>Transcript</NavLink>
                <NavLink route='/' color='#FFFFFF' size='20px'>Offline Package</NavLink>
                <NavLink route='/' color='#FFFFFF' size='20px'>Exercise Files</NavLink>
            </ElementWrapper>

        </Nav>
    )
}

export default CourseNav;