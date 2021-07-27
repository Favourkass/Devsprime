import NavBar from "../../components/navbar/NavBarWraper"
import Footer from "../../components/Footer"
import BlogForm from "./blogForm";
import { BlogContainer } from "./style";

const AddBlog = () => {
    return ( 
        <div>
            <NavBar/>
            <BlogContainer className="container">
                <BlogForm/>
            </BlogContainer>
            <Footer/>
        </div>
    );
}

export default AddBlog;
