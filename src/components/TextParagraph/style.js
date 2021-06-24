import styled from 'styled-components';

const Textgraph = styled.div`
    width: 100%;
    max-width: 500px;
    text-align: left;
    position: absolute;
    padding: 10px;
    padding-left: 20px;
    margin-bottom: 10px;
    
    .titleDiv {
    padding-bottom: 30px;
    }
    .bodyDiv {
    padding-bottom: 20px;
    max-width: 450px;
    }
    .button {
    padding: 10px 0;
    }

    @media screen and (max-width: 420px) {
        width: 100%;
        padding: 10px;
        margin: auto;
        text-align: left;
        .bodyDiv {
        width: 95%;
        }
    }

    @media screen and (max-width: 420px) {
        
    }
`;
export default Textgraph;
