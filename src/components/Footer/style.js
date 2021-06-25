import styled from "styled-components";

const FooterWrapper=styled.div`
background-color: #212121;
color: #FFFFFF;
width: 100%;
font-size: 1vw;
display:flex;
flex-direction: column;
justify-content: space-between;



footer{
    display:flex;
    justify-content: space-evenly;
    width:90%;
}
@media (max-width:682px){

footer{
    width: 90%;
     display: flex;
     flex-direction: column;
     justify-content: space-around;

}
.quicklinks,.contact,.about,.terms{
    margin-left:20px;
    padding: 0px;
    font-size: 14px;
    width:100%;
    border-bottom:1px solid black ;
}
.terms{
    margin-top:10px !important; 
}
.policy{
    font-size: 8px;
}
}

.about{
    
    float: left;
    
}
.quicklinks{    
    height:100%;
    padding-top:40px;
    float: left;
   
}
.contact{
   
    height:100%;
    float: left;
    padding-top:40px;
    
    line-height: 26px;


}
.contact div{
padding-bottom:20px;

}
p{
    padding-bottom: 20px;
}
.links {
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    padding-bottom:10px;
}
 a{
    text-decoration:none;
    color:#FFFFFF;
   padding:5px;
}
.terms{
    
    height:20%;
    float: left;
    margin-top:90px;
}

.logo{
    width: 50%;
    height:100%; 
    padding-top: 35px;
    margin:100px,0;

 }
 .summary{
    margin-top:35px;
    padding-bottom: 10px;
    width:265px;
    line-height: 17.05px;
 }
.icons{
    display:flex;
    width: 80%;

}
.facebook{
    background-color:#272EAE;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    width:20px;
    height:20px;   

}
.instagram{
   background-color:#F53E6A;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    width:20px;
   height:20px;   
}
.twitter{
    background-color:#1590D8;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    width:20px;
   height:20px;   
}
.youtube{
    background-color:#F53E6A;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    width:20px;
    height:20px;   
}
.policy{
    
    width:100%;
    padding:px;
    display:flex;
    justify-content:space-around;
    background-color: #000000;
    height: 39px;
    text-align: center;
    

}
.privacy{
    display:flex;
    justify-content:space-between;
}
.site{
margin-left: 10px;
}
.credit{
    color:#FFC000;
    text-decoration:underline;
}  
` 
export default FooterWrapper
