import React, { useState } from "react";

import Button from "../button/Button";
import DropdownItem from "../dropdown-item/DropdownItem";

import Logo from "../../assets/images/logo.svg";
import ArrowDown from "../../assets/images/icon-arrow-down.svg";
import menuIcon from "../../assets/images/icon-menu.svg";

import {
  Container,
  Navigation,
  AuthSection,
  Features,
  Company,
  MenuIcon,
} from "./Header.styles";

import { features, company } from "./data";
import Drawer from "../drawer/Drawer";

const Header = () => {
  const [toggleFeatures, setToggleFeatures] = useState(false);
  const [toggleCompany, setToggleCompany] = useState(false);
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleToggleFeatures = () =>
    setToggleFeatures((prevState) => !prevState);

  const handleToggleCompany = () => setToggleCompany((prevState) => !prevState);

  const handleToggleDrawer = () => setToggleDrawer((prevState) => !prevState);

  return (
    <Container>
      <img src={Logo} alt="snap" />
      <Navigation>
        <ul>
          <li onClick={handleToggleFeatures}>
            Features{" "}
            <img
              src={ArrowDown}
              alt="open"
              className={toggleFeatures ? "rotate" : ""}
            />
          </li>
          <Features toggleFeatures={toggleFeatures}>
            {features.map((feature, index) => (
              <DropdownItem
                key={index}
                icon={feature.icon}
                title={feature.title}
              />
            ))}
          </Features>
          <li onClick={handleToggleCompany}>
            Company
            <img
              src={ArrowDown}
              alt="open"
              className={toggleCompany ? "rotate" : ""}
            />
          </li>
          <Company toggleCompany={toggleCompany}>
            {company.map((title, index) => (
              <DropdownItem key={index} title={title} />
            ))}
          </Company>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </Navigation>
      <AuthSection>
        <Button>Login</Button>
        <Button type="border">Register</Button>
      </AuthSection>
      <MenuIcon onClick={handleToggleDrawer}>
        <img src={menuIcon} alt="menu" />
      </MenuIcon>
      <Drawer open={toggleDrawer} handleToggleDrawer={handleToggleDrawer} />
    </Container>
  );
};

export default Header;
