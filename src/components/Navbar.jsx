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
  font-family: "Roboto Condensed";
  @media (max-width: 600px) {
    text-align: center;
    padding: 0.5rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  width: 60%;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    justify-content: flex-start;
    flex-flow: column;
    padding: 0;
    align-items: flex-start;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
`;

const IconImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const NavDiv = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

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
    <Ul>
      {navItems.map((item, index) => (
        <Li key={index}>
          <IconImg src={item.icon} alt={item.text} />
          <StyledNavLink href={item.href}>{item.text}</StyledNavLink>
        </Li>
      ))}
    </Ul>
  );
}

export default Navigation;
