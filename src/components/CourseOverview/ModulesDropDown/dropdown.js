import React  from 'react';
import { SubHeader } from '../../typography';
import { Container, LessonItem, LessonLink, LessonWrapper, ModuleWrapper, NavBtn } from './style';

const DropDown = () => {
  
    
    return(
     <>
      <Container>
      
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

export default DropDown;