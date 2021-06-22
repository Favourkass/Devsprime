import { Link,BrowserRouter as Router } from "react-router-dom";

const Terms = () => {

    return ( 
        <Router>
        <div className="terms">
            <Link to="#">Terms and Conditions</Link>
            <Link to="#">Faq</Link>

        </div>
       </Router>
        
     );
}
 
export default Terms;