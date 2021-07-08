import React, {useState} from 'react';
import {FaList} from 'react-icons/fa'
import { SubHeader } from '../../typography';
import { Container, LessonItem, LessonLink, LessonWrapper, ModuleWrapper, NavBtn } from './style';

const ModulesDropDown = (props) => {
    const [active, setActive] = useState(false)

    function handleActive(){
        setActive(!active)
    }
    
    return(
     <>
        <NavBtn onClick={handleActive}><FaList /></NavBtn>

      <Container active={active}>
      
        <ModuleWrapper >
        <SubHeader>Module 1</SubHeader>
            <LessonWrapper>
              <LessonItem>
                  <LessonLink>Lesson 1</LessonLink>
              </LessonItem>
              <LessonItem>
                  <LessonLink>Lesson 1</LessonLink>
              </LessonItem>
              <LessonItem>
                  <LessonLink>Lesson 1</LessonLink>
              </LessonItem>
            </LessonWrapper>
        </ModuleWrapper>
        <ModuleWrapper>
        <SubHeader>Module 1</SubHeader>
        </ModuleWrapper>

      </Container>
    </>
    )
}

export default ModulesDropDown;