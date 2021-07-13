import NavBar from "../../components/navbar/NavBarWraper";
import Footer from "../../components/Footer";
import { SubHeader } from "../../components/typography";
import { Link } from 'react-router-dom'

import { Div, ImageWrapper, Img, MyLink, Container } from "./styled";


const ErrorPage = () => {
    return <>
        <NavBar />
        <Container className="container">
            <Div>
                <ImageWrapper>
                    <Img src="https://res.cloudinary.com/devsprime/image/upload/v1626093826/media/404_page_pnxfcn.png" />
                </ImageWrapper>

                <SubHeader>Sorry! The page you are looking for does not exist.</SubHeader>

                <MyLink>
                    <Link to="/" className="link">Go back home</Link>
                </MyLink>
            </Div>
        </Container>
        <Footer />
    </>
}

export default ErrorPage