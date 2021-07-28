import styled, { keyframes } from 'styled-components'
import Button from '../../components/button'

const FadeIn = keyframes`
    from {
        transform: translateY(-10px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity:1;
    }
`
const ModalDiv = styled.div`
    display:${props => props.display ? "flex" : "none"};
    width:100vw;
    height:100vh;
    background:rgba(255, 158, 0, .8);
    justify-content: center;
    align-items: center;
    position:fixed;
    top:0;
    left:0;
    z-index:50;
    animation: ${FadeIn} 600ms linear;
    @media only screen and (max-width:750px){
        width:100%;
        height: 100%;
    }
`



const ModalBox = styled.div`
    background:#fff;
    width:50%;
    height: 500px;
    border-radius:30px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, .3);
    position:relative;
    padding:50px;
    box-sizing: border-box;
    @media only screen and (max-width:750px){
        width:80%;
    }
`
const BtnWrapper = styled.div`
    position:absolute;
    right:15px;
    bottom:15px;
`

const Modal = ({ display, onClick }) => {
    return <ModalDiv display={display}>
        <ModalBox>
            <h2>Registration Successful</h2>
            <hr />
            <p>Congratulations, your account has been successfully created. <br /><br />
                Please check your mail to verify your account and complete your registration</p>
            <BtnWrapper>
                <Button handleClick={onClick} primary>X</Button>
            </BtnWrapper>
        </ModalBox>
    </ModalDiv>
}

export default Modal