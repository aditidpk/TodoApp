import React from "react";
import { HeaderContainer, StyledHeader } from "./Header.style";
import profileImage from "../../assets/profile_img.png";
import headerTextImage from "../../assets/header-text.png";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <HeaderContainer>
      <StyledHeader src={headerTextImage} alt="header-img" />
      <Avatar
        alt="Profile Image"
        src={profileImage}
        sx={{ width: 44, height: 44 }}
      />
    </HeaderContainer>
  );
};

export default Header;
