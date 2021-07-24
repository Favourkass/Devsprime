import {Link} from "react-router-dom"


const Quicklinks = () => {
    return ( 
        <div className="quicklinks">
                <strong><p>Quicklinks</p></strong>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/signup/instructor">Become a contributor</Link>
            </div>     
        </div>    
     );
} 
export default Quicklinks;