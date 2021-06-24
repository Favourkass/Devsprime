import React from 'react'
import { DevLogo, Image, Dev, Prime, LogoText } from "./style";


function Logo(props) {
  return (
    <DevLogo>
      <LogoText>
        <Dev>{props.logoName ? props.logoName: "DEVS"}</Dev>
        <Prime data-testid="logo_text_test">{props.logoSubName ? props.logoSubName : "PRIME"}</Prime>
      </LogoText>
      <Image src={props.img ? props.img : "https://res.cloudinary.com/devsprime/image/upload/v1624366454/Icons%20and%20Logo/logo_lfhrmz.png"} alt="Logo" />
    </DevLogo>

  );
}

export default Logo;
