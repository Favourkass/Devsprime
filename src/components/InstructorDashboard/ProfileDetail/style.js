import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 112px 0 50px 0;
`;
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
const InstructorName = styled.h2`
  color: #5c5c5c;
  size: 18px;
  line-height: 31.64px;
`;
const InstructorDescription = styled.p`
  color: #5c5c5c;
  size: 14px;
  line-height: 24.61px;
  text-align: center;
  max-width: 70%;
`;
const SocialMediaLinks = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  a{
    cursor: pointer;
  }
`;

export { Container, ProfileImage, InstructorName, InstructorDescription, SocialMediaLinks}
