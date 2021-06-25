const Contact = (props) => {
    return ( 
        <div className="contact">
<<<<<<< HEAD
            <strong><p> Contact us</p></strong>
            <div>+23481234567</div>
            <div>devsprimesq007@gmail.com</div>
            <div> 7, Asajon way,Sangotedo Ajah Lagos</div>
=======
            <strong> <p>Contact us</p></strong>
            <p>{props.telephone}</p>
            <a href={`mailto:${props.email}`}><p>{props.email}</p></a><br/>
            <p>{props.address}</p>
>>>>>>> 679eaf0b898006da2d83b8dc46f671a81370c02e
        </div>
     );
} 
export default Contact;
