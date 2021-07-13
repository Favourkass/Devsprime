import styled from "styled-components";
import { primary } from "../colour/colour";

export const ModalWrapper = styled.div`
  max-width: 600px;
  background: ${props => props.background ? props.background : primary};
  color: white;
  .header{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background: ;
    box-shadow: 0px 7px 17px -10px rgba(0,0,0,0.75);

    .title{
      margin-right: 2rem;
      padding-top: .5rem;
      font-weight: bold;
    }

    .close{
      border-radius: 100%;
      cursor: pointer;
      border: none;
      outline: none;
      padding: .5rem .8rem;

    }
  }
  .content{
    margin: 2rem;
    text-align: justify;
    text-justify: inter-word;
  }
  .footer{
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
  }
  .btn{
  color: ${primary};
  background: "white";
  padding: 12px 30px;
  border-radius: 100px;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border: none;
  margin:2.5px;
  font-weight:bold;
  cursor: pointer;
  }

` 