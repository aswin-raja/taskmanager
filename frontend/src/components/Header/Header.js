import React from "react";
import HeaderStyled from "./HeaderStyled";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import headerimage from '../../assets/headertitle.png';

function Header() {
  return (
    <HeaderStyled>
      <Container className="headermain" fluid>
        
          <img src={headerimage} alt="headerimage" className="headerimage"/>
          
      </Container>
    </HeaderStyled>
  );
}

export default Header;
