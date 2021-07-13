import styled from 'styled-components'

const Div = styled.div`
    box-sizing:border-box;
    width:100%;
    padding:50px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
`

const DivContent = styled.div`
    width:270px;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    padding:20px;
`

const DivContentImage = styled.div`
    width:100px;
    position:relative;
    height:100px;
`
const Img = styled.img`
    width:100%;
    height:100%;
    z-index:10;
`
const DivText = styled.div`
    color:#5C5C5C;
    text-align:center;
`
const Circle = styled.div`
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    width:80px;
    height:80px;
    border-radius: 50%;
    position:absolute;
    bottom:10px;
    left:0;
    z-index:-1;
`

const IconDivs = () => {
    return <Div className="container">
        <DivContent>
            <DivContentImage style={{ fontSize: "16px"}}>
                <Img src="https://res.cloudinary.com/devsprime/image/upload/v1624373087/Icons%20and%20Logo/Vector_7_kewffq.png"/>
                <Circle />
            </DivContentImage>
            <DivText>
                <h5>Unlimited Access</h5>
                <small>One subscription, unlimited access</small>
            </DivText>
        </DivContent>
        <DivContent>
            <DivContentImage>
                <Img src="https://res.cloudinary.com/devsprime/image/upload/v1624373088/Icons%20and%20Logo/teacher_xufgwq.png"/>
                <Circle />
            </DivContentImage>
            <DivText>
                <h5>Expert Teachers</h5>
                <small>Learn from industry experts who are passionate about teaching</small>
            </DivText>
        </DivContent>
        <DivContent>
            <DivContentImage>
                <Img src="https://res.cloudinary.com/devsprime/image/upload/v1624373087/Icons%20and%20Logo/Vector_6_vmmdem.png"/>
                <Circle />
            </DivContentImage>
            <DivText>
                <h5>Learn Anywhere</h5>
                <small>Switch between your computer, tablet or mobile device.</small>
            </DivText>
        </DivContent>
    </Div>
}

export default IconDivs