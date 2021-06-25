import styled from 'styled-components';

export const MainContainer = styled.div`
display: inline-flex;
position: relative;
resize: both;
margin-left:30px;
margin-right:10px;
`;

export const BadgeContainer = styled.div`
  position:relative;
  bottom:15px;
  width: ${(props)=>props.WIDTH};
  height: ${(props)=>props.HEIGHT};
  background: ${(props)=>props.backgroundColor};
  border-radius: 50%; 
  margin:5px;
`;

export const Notification = styled.p`
  text-align: center;
  color: white;
`;
export const NumContainer=styled.div`
position: relative;
bottom: 12px;
font-size: 10;
`;
export const Cart=styled.img`
  position: relative;
  width: ${(props)=>props.WIDTH};
`;

