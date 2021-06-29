import { Link,BrowserRouter as Router } from "react-router-dom";


const Terms = () => {
    return ( 
        <Router>
        <div className="terms">
            <Link to="#"><div>Terms and Conditions</div> </Link>
            <Link to="#"><div>Faq</div> </Link>
        </div>
       </Router>      
     );
} 
export default Terms;
