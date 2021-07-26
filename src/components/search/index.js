import React from "react";
import {Section, Input, Hr, Icon} from './style'


function Search(props) {
  return (
    <Section  id="search"
      leftGradientColor={props.leftGradientColor}
      rightGradientColor={props.rightGradientColor}
    >
      <Icon src="https://res.cloudinary.com/devsprime/image/upload/v1624378769/Icons%20and%20Logo/icons8_ofhg40.svg"></Icon>
      <Input
        leftGradientColor={props.leftGradientColor}
        rightGradientColor={props.rightGradientColor}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
      <Hr />
    </Section>
  );
}

export default Search;

