import React from 'react';
import {Wrapper, ImageWraper, SocialMediaWraper, ImageLink} from './style';
import {SubHeader, Paragraph} from '../../typography/index';

const InstructorDetails = () =>{
    return(
        <Wrapper>
            
            <SubHeader> Instructor</SubHeader>
            
            <ImageWraper>
                <img src={''} alt='instructor' />
            </ImageWraper>
            
            <SubHeader color='#5C5C5C' weight="bold"> Bosun Jones</SubHeader>
            
            <Paragraph lineHeight='24.61px' >
            Drew Bridewell is a senior design specialist at InVision. 
            He also teaches user experience design on a weekly basis to 
            the community and also has piloted UX design programs for middle schools. 
            </Paragraph>

            <SocialMediaWraper>
               <ImageLink to=''> <img width='35px' height='35px' src='https://res.cloudinary.com/devsprime/image/upload/v1624927377/Icons%20and%20Logo/facebook-logo_vnedqz.png' alt='facebook'/> </ImageLink>
               <ImageLink to=''> <img width='35px' height='35px' src='https://res.cloudinary.com/devsprime/image/upload/v1624927377/Icons%20and%20Logo/instagram-logo_l7uhjj.png' alt='instagram'/> </ImageLink>
               <ImageLink to=''> <img width='35px' height='35px' src='https://res.cloudinary.com/devsprime/image/upload/v1624927377/Icons%20and%20Logo/twitter-logo_dcaurw.png' alt='twitter' /> </ImageLink>
            </SocialMediaWraper>
            

        </Wrapper>
    )
}

export default InstructorDetails;