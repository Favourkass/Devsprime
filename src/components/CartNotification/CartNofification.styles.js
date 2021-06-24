import styled from 'styled-components';

export const MainContainer = styled.div`
display: inline-flex;
position: relative;
resize: both;
`;

export const BadgeContainer = styled.div`
  position:relative;
  bottom:10px;
  width: ${(props)=>props.WIDTH};
  height: ${(props)=>props.HEIGHT};
  background: ${(props)=>props.backgroundColor};
  border-radius: 50%; 
`;

export const Notification = styled.p`
  position: relative;
  bottom: 25px;
  text-align: center;
  color: white;
  font-size: 30px;
`;

export const Cart=styled.img`
  position: relative;
  width: ${(props)=>props.WIDTH};
`;

