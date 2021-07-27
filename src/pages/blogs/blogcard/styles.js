import styled from "styled-components";


export const BlogCardContainer = styled.div`
  margin: 5rem 0;
`

export const BlogCardStyle=styled.div`
color: white;
max-height: 600px;
margin-bottom: 5rem;
.blog-btn{
  margin: 2rem;
}

section{
  margin: auto;
  max-width: 32rem;
  border-radius: 20px;
  background: url(${'https://res.cloudinary.com/devsprime/image/upload/v1624489646/Blogs/blog-bg_wqfkpi.png'}), bottom , linear-gradient(333deg,#FF8A00 1.55%,#FFC000 95.8%); 
}

.image{
  max-height: 350px;
  overflow: hidden;
}

section h3{
  font-size: calc(var(--width)/10);
  padding: 20px;
}
section p{
  color: white;
  font-size: calc(var(--width)/20);
  padding-left: 20px;
  padding-right: 20px;
}
.date{
  font-size: calc(var(--width)/25);
  padding: 20px;
  padding-top: 0;
}
.title{
  font-size: calc(var(--width)/25);
  padding: 20px;
  padding-bottom: 0;
}
h1{
  color: #fff;
  padding: 20px;
}

section a{
  text-decoration: none;
  color: #001D66;
  font-weight: 700;
  font-size: calc(var(--width)/23);
}
`;


export const BtnTag = styled.p`
background: #FFB76B;
background: -webkit-linear-gradient(to right, #FFB76B 0%, #FFA73D 30%, #FF7C00 60%, #FF7F04 100%);
background: -moz-linear-gradient(to right, #FFB76B 0%, #FFA73D 30%, #FF7C00 60%, #FF7F04 100%);
background: linear-gradient(to right, #FFB76B 0%, #FFA73D 30%, #FF7C00 60%, #FF7F04 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-weight:bolder;
@media (max-width: 768px) {
  padding-top: 3px;
}
`
export const BlogReadMoreButton = styled.button`
cursor:pointer;
background: #FFFFFF;
box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
border-color: #FFFFFF;
border-radius: 100px;;
text-align :center;
color: rgba(255, 192, 0, 1);
margin: 15px 40px 20px 40px;
@media (max-width: 768px) {
  padding: 2px 10px 2px 7px;
  margin: 15px 40px 20px 7px;
}
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
