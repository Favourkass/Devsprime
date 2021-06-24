const Contact = (props) => {
    return ( 
        <div className="contact">
            <strong> <p>Contact us</p></strong>
            <p>{props.telephone}</p>
            <a href={`mailto:${props.email}`}><p>{props.email}</p></a><br/>
            <p>{props.address}</p>
        </div>
     );
} 
export default Contact;
