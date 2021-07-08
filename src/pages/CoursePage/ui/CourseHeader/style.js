import styled from 'styled-components';


const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .left {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .left .show{
        margin-left: 50px;
    }

    .right {
        display: flex;
        align-items: center;
        justify-content: space-between;
        div{
            margin-left: 15px;
        }
    }


    @media screen and (max-width: 600px){
        justify-content: center;
        
        .left .show{
            margin-left: 20px;
        }

        .right .iconlist{
            display: none;
        }

        .right .iconlarge{
            display: none;
        }

        .right .filter{
            margin-left: -5px;
        }

    }
`;

export default HeaderStyle;
