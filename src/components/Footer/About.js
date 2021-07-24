import { Link } from 'react-router-dom';
import Logo from "../logo";


const About = (props) => {
    return (  
        <div className="about">    
            <Link to="/">
                <div className="logo"><Logo /></div>
            </Link>
            <div className="summary">Devsprime is an online education platform that delivers video courses,programs and undending blog updates.</div>     
        
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
