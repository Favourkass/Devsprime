import styled from "styled-components";

export const AllComments=styled.div`
margin: auto;
margin: 5rem 0;
.container{
  border: solid 1px #d3c6c6;
  -webkit-border-radius: 1rem; 
  -moz-border-radius: 1rem; 
  border-radius: 1rem; 
}

  P{
    font-size: 14px;
    font-weight: normal;
    line-height: 120%;
    color: black;
  }
.comment{
  display: grid;
  grid-template-columns: 1fr 7fr;
  list-style: none;
  border-bottom: solid 1px #d3c6c6;
  margin-bottom: 0px;
  padding: 3px;
}
.comment-image{
  border-radius: 50%;
}
.reply{
  display: grid;
  grid-template-columns: 1fr 7fr;
  list-style: none;
  margin-bottom: 0px;
  padding: 3px;
}
.reply-image{
  border-radius: 50%;
}

`;