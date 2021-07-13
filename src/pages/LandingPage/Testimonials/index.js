import React from 'react';
import Testimonial from '../../../components/testimonial';
import { Header, Paragraph } from '../../../components/typography'
import { Section, ReviewContainer } from './styles'


const Testimonials = () => {
    return (
        <Section className="container">
            <Header
                lineHeight="0.85"    
            >What Students Say
            </Header>
            <Paragraph
                lineHeight="1"
            >Our students can't wait to start another course. Devsprime eliminantes all barriers to learning.</Paragraph>
      
            <ReviewContainer>
              <Testimonial 
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                author="Marrero Broklyn"
                categories="Management"
                text="Learning from the instructor and the easy to follow step gave me motivation and wanting to learn more. I have taken 5 course so far and enjoyed all 5 learned a lot. Will return for more course materials for more learning experience soon."
              />
              <Testimonial 
                avatar="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80"
                author="Ada Chima"
                categories="Programming"
                text="They are constantly having sales. Devsprime saved my sanity this year at a very reasonable cost, and taught me quite a bit during the process. Two thumbs up!."
              />
              <Testimonial
                avatar="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80"
                author="Barry Stone"
                categories="3D Modelling"
                text="Enjoyable courses with class discussions with your professors and other classmates. Most classes have comprehensive exams, but few require written essays for exam answers."
              />
              {/* <Testimonial 
                avatar="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                author="Mike James"
                categories="Data Sciencd"
                text="Couldn't be happier with the courses and customer service from Devsprime. I had an issue recently with a duplicate account and needed a merge done. It was handled so well by a lovely technical support person called Chris."
              /> */}
            </ReviewContainer>
            
            


        </Section>
    )
}

export default Testimonials
