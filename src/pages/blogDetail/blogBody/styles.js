import styled from "styled-components";

export const BlogBodyStyle=styled.div`
margin: 5rem 0;
.blog-body{
  max-width: 55rem;
  margin: 0 auto;
  text-align: justify;
  text-justify: inter-word;
`;

// export const BlogImageContainer=styled.div`
//   background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%);
//   img{
//     position: relative;
//     box-sizing: border-box;
//     width: 40%;
//     left:35%;
//   }
// `;
export const BelowBlogBody=styled.div`
max-width: 55rem;
margin: auto;
list-style: none;
font-size: 14;
color: #5C5C5C;
display: flex;
justify-content: space-between;
margin-bottom: 20px;

.share-social{
  display: flex;
  justify-content: space-between;
  .center{
    margin-right: 1rem;
    padding-top: 13px;
  }
}

.left{
  padding-top: 13px;
}
}

.facebook{
  color: blue;
  font-size: 30px;
}
.twitter{
  color: green;
  font-size: 32px;
}
.youtube{
  font-size: 36px;
  color: red;
}
`;

export const NextPrevious=styled.div`
margin: auto;
max-width: 50rem;

display: grid;
grid-template-columns: 6fr 2fr;
margin-top:20px;
.previous{
  
}
.next{
  
}
`;

export const Titles=styled.div`
max-width: 50rem;
margin: auto;
display: grid;
grid-template-columns: 6fr 3fr;
margin-bottom: 20px;

`;