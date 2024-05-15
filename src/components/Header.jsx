import React from "react";
import styled from "styled-components";

const Head = styled.h1`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #ce2829;
  margin: 0;
`;
export default function Header() {
  return <Head>Teknolojik Yemekler</Head>;
}
