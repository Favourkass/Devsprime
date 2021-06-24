import {Link,BrowserRouter as Router} from "react-router-dom"


const Quicklinks = () => {
    return ( 
        <div className="quicklinks">
                <strong><p>Quicklinks</p></strong>
                <Router><div className="links">
                <Link to="/" >Home</Link>
                <Link to="#" >Courses</Link>
                <Link to="#" >About Us</Link>
                <Link to="#" >Contact Us</Link>
                <Link to="#" >Become a contributor</Link>
                </div>
                </Router>  
        </div>    
     );
} 
export default Quicklinks;