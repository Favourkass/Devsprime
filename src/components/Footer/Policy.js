const Policy = (props) => {
    return (  
        <div className="policy">
            <div>
                <strong><p>All Right Reserved | {props.company} {props.year} </p></strong>
            </div>
            
                        <div className="privacy"><strong><p>Privacy <span>Policy</span> </p></strong> 
                        <strong><p className="site">Site <span className="credit">Credit</span></p></strong>
                        
                        </div>
                
                
              
           
        </div>
    );
}
 
export default Policy;