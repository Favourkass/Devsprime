const About = (props) => {
    return (  
        <div className="about">    
        <div className="logo">
           <h2>{props.company}</h2> <img src="#" alt="logo" />  
        </div> 
        <p>{props.about_company}</p>     
        <div className="icons">
        <a href="/"><img src="https://res.cloudinary.com/devsprime/image/upload/v1624383518/Icons%20and%20Logo/facebook_bzctey.svg" alt=""  className="facebook"/></a>  
        <a href="/"><img src="https://res.cloudinary.com/devsprime/image/upload/v1624384333/Icons%20and%20Logo/youtube_2_b3yxhw.svg" alt="" className="youtube"/></a>
        <a href="/"><img src="https://res.cloudinary.com/devsprime/image/upload/v1624384379/Icons%20and%20Logo/instagram_3_rwtijy.svg" alt="" className="instagram"/></a>
        <a href="/"><img src="https://res.cloudinary.com/devsprime/image/upload/v1624383565/Icons%20and%20Logo/twitter_gmmfke.svg" alt="" className="twitter"/></a>  
        </div>
     </div>
    );
} 
export default About;
