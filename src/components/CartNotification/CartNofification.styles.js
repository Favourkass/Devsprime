import styled from 'styled-components';

export const MainContainer = styled.div`
display: inline-flex;
position: relative;
`;
export const BadgeContainer = styled.div`
  position:relative;
  right:15px;
  width: 37.71px;
  height: 37.71px;
  background: ${(props)=>props.backgroundColor};
  border-radius: 50%; 
`;

export const Notification = styled.p`
  position: relative;
  bottom: 6px;
  text-align: center;
`;

export const Cart=styled.img`
  position: relative;
  width: ${(props)=>props.WIDTH};
`;

