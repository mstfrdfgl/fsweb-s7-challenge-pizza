import styled from "styled-components";
import "../anasayfa.css";
import { Link, Route, Switch } from "react-router-dom";
import SiparisFormSayfasi from "./SiparisFormSayfasi";
import Header from "../components/Header";
import { BigFontSpan, SatisfySpan } from "../components/Styled";
const Button = styled.button`
  background-color: #fdc913;
  color: white;
  font-size: 1rem;
  width: 10rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #bf9708;
  }
`;
const Span = styled.span`
  font-family: Satisfy;
  color: #fdc913;
`;
export default function Anasayfa() {
  return (
    <>
      <div className="anasayfa-container">
        <div className="anasayfa-header">
          <SatisfySpan>fırsatı kaçırma</SatisfySpan>
          <BigFontSpan className="padd bigfont">KOD ACIKTIRIR</BigFontSpan>
          <BigFontSpan className="padd bigfont">PİZZA, DOYURUR</BigFontSpan>
          <Link to="/siparis-form">
            <Button>Acıktım</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
