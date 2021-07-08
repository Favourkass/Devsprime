import Styled from "styled-components";

export const Parent = Styled.div`
display:flex;
`;

export const Divv = Styled.div`
padding:80px 80px;
@media (max-width:540px){
  padding:50px 50px;
  .small{
    font-size:35px;
  }
  }
@media (max-width:280px){
  .small{
    font-size:20px;
  }
  }


`;

export const ImageDiv = Styled.div`
width:50%;
padding:100px 200px;
background-image: url("https://res.cloudinary.com/devsprime/image/upload/v1624388681/media/about_us_fxfih5.jpg");
background-size: cover;

@media (max-width:768px){
    display:none;
    }
  
`;

export const SectionDiv = Styled.div`
margin-top:100px;
width:100%;
display:flex;
@media (max-width: 375px){
  margin:0;
      width: 100%;
      margin-top:-250px;
      margin-left:50px;   
    }
   
    
    @media (max-width: 540px){
      margin:0;
          width: 100%;
          margin-top:-250px;
          margin-left:50px;
         
        }
  @media (min-width: 720px) and (max-width: 768px) { 
    width: 100%;
    margin-top:-250px;
    margin-left:80px;
   
  }

        
`;

export const ImageTag = Styled.img`
height: 500px;
width: 80%;
margin-top: 120px;
margin-bottom:100px;
border-radius:30% 70% 70% 30% / 30% 30% 70% 70%;
`;
export const IconDiv = Styled.div`
width:50%;
@media (max-width:768px){
  display:none;
  }


`;
export const WritrUpDiv = Styled.div`
padding-top:200px;
width:50%;
  .smallWrite{
    width:60%;
    line-height:1.6;

  }

  @media (max-width: 375px){
    width:60%;
    .small{
      font-size:20px;
    }
     .smallWrite{
      font-size:14px;
      line-height:1.6;
      text-align:left;
     }
      }
  @media (max-width: 280px){
    width:70%;
    .small{
      font-size:10px;
    }
     .smallWrite{
      font-size:8px;
      line-height:1.6;
      text-align:left;
     }
      }
      @media (min-width: 720px) and (max-width: 768px) { 
        width: 60%;
       
      }

      @media(max-width: 1280px) { 
        .smallWrite{
          width:80%;
          font-size:16px;
          line-height:1.6;
          text-align:left;
         }
       
      }

      @media (max-width: 540px){
        width:80%;
        .small{
          font-size:24px;
        }
         .smallWrite{
          font-size:16px;
          line-height:1.6;
          text-align:left;
         }
          }
 
`;

// Section2 Styles
export const SectionDiv2 = Styled.div`
margin-top:-25px;
margin-bottom:30px;
margin-left:-60px;

width:100%;
display:flex;
@media (max-width: 375px){
      width: 100%;
      margin-top:-20px;
       
    }
        
@media (max-width: 740px){
  width: 100%;
 margin-left:200px;
}


@media (min-width: 720px) and (max-width: 768px) { 
      width: 100%;
      margin-top:-80px;
      margin-left:-70px;
     
    }

@media (min-width: 540px) and (max-width: 720px) { 
      width: 100%;
      margin-top:-70px;
      margin-left:-100px;
     
    }
`;

export const WritrUpDiv2 = Styled.div`
padding-top:50px;
padding-left:150px;
width:40%;
  .smallWrite{
    width:65%;
    text-align:left;
    line-height:1.6;
  }
 

  @media (max-width: 540px){
    width:90%;
    .small{
      font-size:30px;
    }
     .smallWrite{
      font-size:16px;
      line-height:1.6;
      text-align:left;
     }
      }
@media (min-width: 720px) and (max-width: 768px) { 
  width: 100%;
  margin-top:30px;
  
 
}
  
   @media (max-width: 411px){
    width: 100%;
    margin-top:-30px;
    margin-left:-300px;
    .small{
      font-size:20px;
      line-height:1.6;
     
  }
    .smallWrite{
      font-size:14px;
      text-align:left;
      line-height:1.6;
     
  }


  @media (max-width: 280px){
    width:100%;
    .small{
      font-size:16px;
    }
     .smallWrite{
      font-size:14px;
      line-height:1.6;
      text-align:left;
     }
      }
   


      @media (min-width: 768px){
        margin-top:50px;
        margin-left:-200px;
        width:80%;
        .small{
          font-size:24px;
        }
         .smallWrite{
          font-size:16px;
          line-height:1.6;
          text-align:left;
         }
          }

          

`;

export const IconDiv2 = Styled.div`
width:60%;
@media (max-width:768px){
  width:100%;
  display:none;
  }
`;

export const SvgImage2 = Styled.img`
width:50%;
padding-top:40px;

`;

export const Iconsmalldiv = Styled.div`

`;

export const Icon1 = Styled.img`
width:6%;
height:6%;
padding-right:50px;

`;

export const StatisticDiv = Styled.div`
padding: 20px 200px;
background: linear-gradient(333deg,#FF8A00 1.55%,#FFC000 95.8%);
 @media (max-width: 768px) {
  padding: 20px 100px;
 }

`;
export const StaticRows = Styled.div`
width: 100%;
display: flex;
/* flex-flow: row wrap; */
/* padding:5px */
justify-content:center;
align-items:top;
 @media (max-width: 768px) {
  flex-flow: row wrap;
  justify-content:center;
 }
`


export const Wrapper2 = Styled.div`
padding-top:80px;
padding-left:150px;
width:40%;
  .smallWrite{
    width:70%;
    text-align:left;
    line-height:1.6;
  }
  @media (max-width: 375px) {
    margin-left:-90px;
    width:100%;
    padding-top:10px;
    .small{
      font-size:20px;
    }
      .smallWrite{
         width:80%;
        font-size:14px;
        width:100%;
        text-align:left;
        line-height:1.6;
      }
   }




   @media (max-width: 411px) {
    margin-left:-90px;
    width:100%;
    padding-top:10px;
    .small{
      font-size:20px;
    }
      .smallWrite{
         width:80%;
        font-size:14px;
        width:80%;
        text-align:left;
        line-height:1.6;
      }
   }


   @media (min-width: 768px){
    margin-left:-100px;
    width:100%;
    padding-top:10px;
    .small{
      font-size:30px;
    }
     .smallWrite{
      font-size:16px;
      line-height:1.6;
      text-align:left;
     }
      }
      @media (min-width: 445px) and  (max-width: 768px){
        margin-top:-50px;
        margin-left:-140px;
          width:100%;
          .small{
            font-size:30px;
          }
            .smallWrite{
              width:100%;
              font-size:17px;
              width:80%;
              text-align:left;
              line-height:1.6;
            }
       }
       @media (min-width: 768px) and  (max-width: 1280px){
        margin-left:-100px;
          width:100%;
          .small{
            font-size:40px;
          }
            .smallWrite{
              width:100%;
              font-size:18px;
              width:80%;
              text-align:left;
              line-height:1.6;
            }
       }
 
`;

export const SectionDiv4 = Styled.div`
width:100%;
height:70vh;
padding:40px;
display:flex;
background-color:#FFF7DF;
@media (max-width: 375px) {
  height:auto;
  width:100%;
  margin-left:-60px;
  
 }
 @media (max-width: 411px) {
  height:auto;
  width:100%;
  margin-left:-60px;
  
 }
 

 @media (min-width: 445px) and  (max-width: 768px){
  height:auto;
  width:100%;

 }



 @media(min-width:768) {
  height:auto;
  width:100%;
 
}

`;
export const BoxDiv = Styled.div`
width:60%;
height:auto;
@media (max-width: 768px) {
 display:none;
}

`;

export const Box1 = Styled.div`
background-color:blue;
height: 164.1px;
width:118.76px;
background-color:#C4C4C4;
border-radius: 5px;
position: relative;
right:35%;
top: 38%;
@media (min-width: 768px) and  (max-width: 1280px){
position: relative;
top: 33%;
right:1%;
}
`;

export const Box2 = Styled.div`
background-color:blue;
height: 196.92px;
width:211.39px;
background-color:#C4C4C4;
border-radius: 5px;
position: relative;
right: 10%;
bottom:10%;
@media (min-width: 768px) and  (max-width: 1280px){
 display:none;

`;
export const Box3 = Styled.div`
background-color:blue;
height:105.02px;
width:76.01px;
background-color:#C4C4C4;
border-radius: 5px;
position: relative;
right: 10%;
bottom:6.5%;
@media (min-width: 768px) and  (max-width: 1280px){
  display:none;
`;

export const Box4 = Styled.div`
background-color:blue;
height:196.92px;
width:211.39px;
background-color:#C4C4C4;
border-radius: 5px;
position: relative;
left: 6.5%;
bottom:25.5%;
@media (min-width: 768px) and  (max-width: 1280px){
  position: relative;
  left: 18.5%;
  bottom:23.5%;
`;
export const Box5 = Styled.div`
background-color:blue;
height:105.02px;
width:76.01px;
background-color:#C4C4C4;
border-radius: 5px;
position: relative;
left: 33%;
bottom:84%;
@media (min-width: 768px) and  (max-width: 1280px){
  display:none;
`;
export const Box6 = Styled.div`
background-color:blue;
height:164.1px;
width:209.58px;
background-color:#C4C4C4;
border-radius: 5px;
position: relative;
left: 33%;
bottom:135.5%;
@media (min-width: 768px) and  (max-width: 1280px){
  position: relative;
  left: 28%;
  bottom:13.5%;
`;
export const Box7 = Styled.div`
background-color:blue;
height:210.05px;
width:152.01px;
background-color:#C4C4C4;
border-radius: 5px;
position: relative;
left: 50%;
bottom:130.5%;
@media (min-width: 768px) and  (max-width: 1280px){
  position: relative;
  left: 27.5%;
  bottom:10.5%;
`;
export const Box8 = Styled.div`
background-color:blue;
height:105.02px;
width:76.01px;
background-color:#C4C4C4;
border-radius: 5px;
position: relative;
left: 64.6%;
bottom:127.5%;
@media (min-width: 768px) and  (max-width: 1280px){
  display:none;
`;

export const Last = Styled.div`
width:100%;
height:50vh;
display:flex;
background-image:
linear-gradient(255.37deg, #FFC000 7.8%, rgba(255, 183, 0, 0.8) 22.26%, #FF8A00 69.51%),
    url('https://res.cloudinary.com/devsprime/image/upload/v1624388339/media/about_us2_m8p352.jpg');
background-size: cover;
background-repeat: no-repeat;
background-position: center
// background: linear-gradient(255.37deg, #FFC000 7.8%, rgba(255, 183, 0, 0.8) 22.26%, #FF8A00 69.51%);
@media (max-width: 375px) {
  height:auto;
  width:100%;
  margin-left:-60px;
 }

}
@media (max-width: 411px) {
 height:auto;
 width:100%;
 
}


@media (min-width: 445px) and  (max-width: 768px){
  height:auto;
  width:100%;

 }

 
 @media (min-width: 768px) and  (max-width: 1280px){
  height:auto;
  width:100%;
 }

`;

export const Wrapper = Styled.div`
padding-top:60px;
padding-left:90px;
width:50%;

  .smallWrite{
    width:60%;
    text-align:left;
    line-height:1.6;
  }

  @media (max-width: 375px) {
padding-top:20px;
padding-left:35px;
    width:80%;
    
   }

   @media (max-width: 411px) {
    padding-top:20px;
    padding-bottom:20px;
    padding-left:35px;
        width:80%;
       }

  

@media (min-width: 445px) and  (max-width: 768px){
  padding-top:20px;
  padding-bottom:20px;
  padding-left:45px;
      width:90%;

 }

 @media (min-width: 768px) and  (max-width: 1280px){
  padding-top:20px;
  padding-bottom:20px;
  padding-left:90px;
  width:90%;
 }

`;

