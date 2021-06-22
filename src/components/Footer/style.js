import styled from "styled-components";

const FooterWrapper=styled.div`
background-color: #212121;
color: #FFFFFF;
max-width:100%;
width:100vw;
display:flex;
justify-content:space-around;
flex-wrap:wrap;
padding:px;
box-sizing:border-box;

  


.quicklinks{
    
   
    border-radius: nullpx;
    


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
    display:flex;
    flex-direction: column;
    margin-top:90px;
    
}
.logo{
display: flex;

}

.about,p{
    padding-bottom:20px;
}
.icons{
    display:flex;
   
    

}

.facebook{
    background-color:#272EAE;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    width:40px;
    height:40px;
}
}
.instagram{
   background-color:#F53E6A;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    width:40px;
    height:40px;
   
}
.twitter{
    background-color:#1590D8;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    width:40px;
    height:40px;
}
.youtube{
    background-color:#F53E6A;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    width:40px;
    height:40px;
}



.policy{
    box-sizing:border-box;
   
    width:100%;
    padding:px;
    display:flex;
    justify-content:space-around;
    background-color: #000000;
    padding-left:8px;


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