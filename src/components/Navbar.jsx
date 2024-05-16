import React, { useState } from "react";
import styled from "styled-components";
import { Collapse, Navbar, Nav, NavLink } from "reactstrap";
import kore from "../../Assets/mile2-aseets/icons/1.svg";
import pizza from "../../Assets/mile2-aseets/icons/2.svg";
import burger from "../../Assets/mile2-aseets/icons/3.svg";
import patates from "../../Assets/mile2-aseets/icons/4.svg";
import fastfood from "../../Assets/mile2-aseets/icons/5.svg";
import icecek from "../../Assets/mile2-aseets/icons/6.svg";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  padding: 1em;
  color: black;
  @media (max-width: 600px) {
    text-align: center;
    padding: 0.5rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
  margin: 0;

  @media (max-width: 600px) {
    justify-content: space-around;
    flex-flow: column wrap;
    padding: 0;
    align-items: flex-start;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
`;

const IconImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const NavDiv = styled.div``;

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navItems = [
    { icon: kore, text: "YENİ! KORE", href: "#" },
    { icon: pizza, text: "Pizza", href: "#" },
    { icon: burger, text: "Burger", href: "#" },
    { icon: patates, text: "Kızartmalar", href: "#" },
    { icon: fastfood, text: "Fast Food", href: "#" },
    { icon: icecek, text: "Gazlı İçecek", href: "#" },
  ];

  return (
    <NavDiv>
      {/* <StyledNavbar color="dark" dark expand="md" {...args}> */}
      {/* <Collapse isOpen={isOpen} navbar> */}
      {/* <Nav className="me-auto" navbar> */}
      <Ul>
        {navItems.map((item, index) => (
          <Li key={index}>
            <IconImg src={item.icon} alt={item.text} />
            <StyledNavLink href={item.href}>{item.text}</StyledNavLink>
          </Li>
        ))}
      </Ul>
      {/* </Nav> */}
      {/* </Collapse> */}
      {/* </StyledNavbar> */}
    </NavDiv>
  );
}

export default Navigation;
