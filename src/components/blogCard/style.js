import Styled from "styled-components";


export const BlogCardWrapper = Styled.div`
 border-radius: 0.5em;
 flex: 0 0 50%;
 max-width: 50%;
 overflow-x:hidden;
 margin: 20px auto 20px auto;
 border: solid 1px gray;
 diplay:block;
 @media (max-width: 768px) {
  flex: 0 0 100%;
	max-width: 100%;
  }
`


export const BlogContent = Styled.div`
background: url(${'https://res.cloudinary.com/devsprime/image/upload/v1624489646/Blogs/blog-bg_wqfkpi.png'}), bottom , linear-gradient(333deg,#FF8A00 1.55%,#FFC000 95.8%); 
background-repeat: no-repeat;
background-position: bottom;
padding: 15px;
@media (max-width: 768px) {
  width: 100%;
}
`

export const CardSection = Styled.div`
height: ${props => props.height ? props.height : 'auto'};
overflow-y: hidden;
  `

const BlogTitle = Styled.h1`
margin:0;
padding: 20px 40px 20px 40px;
color : white;
font-family: inherit;
text-align: left;
font-size: 32px;
line-height: 39px;
@media (max-width: 768px) {
  padding: 2px 10px 2px 10px;
}
`

const BlogSubTitle = Styled.strong`
margin:0;

color : white;
padding: 2px 40px 2px 40px;
font-family: inherit;
text-align: left;
font-size: 12px;
line-height: 20px;
font-weight: bolder;
@media (max-width: 768px) {
  padding: 2px 10px 2px 10px;
}
`

const BlogBody = Styled.p`
color : white;
padding: 2px 40px 2px 40px;
margin: auto;
font-family: inherit;
text-align: left;
font-family: Proxima Nova;
font-size: 20px;
line-height: 28px;
@media (max-width: 768px) {
  padding: 2px 10px 2px 0px;
}
`
const BtnTag = Styled.p`
color : white;
padding-top: 15px;
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
const BlogReadMoreButton = Styled.div`
width: 160px;
height: 56px;
margin: 15px 40px 20px 40px;
background: #FFFFFF;
box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
border-radius: 100px;
text-align :center;
color: rgba(255, 192, 0, 1);
@media (max-width: 768px) {
  padding: 2px 10px 2px 7px;
  margin: 15px 40px 20px 7px;
}
`
export const BlogCardImg = ({ src }) => {
  return (
    <>
      <CardSection height="400px">
        <BlogImg src={src} />
      </CardSection>
    </>
  );
}

export const BlogCardHeader = ({ title, date, instructor }) => {
  return (
    <>
      <BlogTitle>{title}</BlogTitle>
      <BlogSubTitle>{date} -by {instructor}</BlogSubTitle>
    </>
  );
}

export const BlogCardBody = ({ content }) => {
  return (
    <>
      <BlogBody>{content}</BlogBody>

    </>
  );
};

export const BlogBtn = ({ label, url }) => {
  return (
    <a href={url} style={{ color: 'white' }}>
      <BlogReadMoreButton>
        <BtnTag>{label}</BtnTag>
      </BlogReadMoreButton>
    </a>
  );
};



export const BlogImg = Styled.img.attrs(props => ({
  src: props.src || 'https://res.cloudinary.com/devsprime/image/upload/v1624489578/logo_riepfy.png'
}))`

margin: auto;
align-content:center;
width: 100%;
display: block;
@media (max-width: 768px) {
  width: 100%;
}
`
