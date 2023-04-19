import React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  SwipeableDrawer,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Container,
  CloseIcon,
  AuthContainer,
  Navigation,
  Box,
} from "./Drawer.styles";

import closeIcon from "../../assets/images/icon-close-menu.svg";
import Button from "../button/Button";
import DropdownItem from "../dropdown-item/DropdownItem";

import { features, company } from "../header/data";

const Drawer = ({ open, handleToggleDrawer }) => {
  return (
    <SwipeableDrawer
      open={open}
      onClose={handleToggleDrawer}
      anchor="right"
      onOpen={handleToggleDrawer}
    >
      <Container>
        <CloseIcon
          onClick={handleToggleDrawer}
          src={closeIcon}
          alt="closeIcon"
        />
        <Navigation>
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{ fontSize: "1.5rem", color: "hsl(0, 0%, 41%)" }}
              >
                Features
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box>
                {features.map((item, index) => (
                  <DropdownItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                  />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{ fontSize: "1.5rem", color: "hsl(0, 0%, 41%)" }}
              >
                Features
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box>
                {company.map((item, index) => (
                  <DropdownItem key={index} title={item} />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{ fontSize: "1.5rem", color: "hsl(0, 0%, 41%)" }}
              >
                Careers
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{ fontSize: "1.5rem", color: "hsl(0, 0%, 41%)" }}
              >
                About
              </Typography>
            </AccordionSummary>
          </Accordion>
        </Navigation>
        <AuthContainer>
          <Button>Login</Button>
          <Button type="border">Register</Button>
        </AuthContainer>
      </Container>
    </SwipeableDrawer>
  );
};

export default Drawer;
