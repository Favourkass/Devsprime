import styled from 'styled-components';

export const MainContainer=styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
`;

export const ImageContainer = styled.div`

`;

export const Mapper=styled.div`
  background: linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%); background-blend-mode: multiply;
  height: ${(props)=>props.HEIGHT};
  width: ${(props)=>props.WIDTH};
  border-radius: 50%;
  margin: auto;
`;

export const Icon=styled.img`
  position: relative;
  top: 15px;
  left: 20px;
  width: ${(props)=>props.WIDTH};
`;

export const Text=styled.p`
  text-align: center;
  color: ${(props)=>props.COLOR};
  font-size: ${(props)=>props.SIZE};
  line-height: 25px;
  letter-spacing: 0em;
`;
