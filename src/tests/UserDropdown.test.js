import { render, screen } from '@testing-library/react';
import React from 'react'
import  ReactDOM  from 'react-dom';

import DropDownCard from '../components/userDropDown/DropDownCard/dropDownCard';
import UserIcon from '../components/userDropDown/UserImage/userIcon';


describe('DropDownCard', ()=>{
    it("renders without crashing", ()=>{
        const div = document.createElement("div")
        ReactDOM.render(<DropDownCard />, div)
    })
})

describe('UserIcon', ()=>{
    it("renders user-icon properly", ()=>{
        const div = document.createElement("div")
        ReactDOM.render(<UserIcon />, div)
    })
})