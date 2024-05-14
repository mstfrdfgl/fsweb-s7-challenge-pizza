import styled from "styled-components";
import "../anasayfa.css";
import { Link, Route, Switch } from "react-router-dom";
import SiparisFormSayfasi from "./SiparisFormSayfasi";
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
          <h1 className="padd">Teknolojik Yemekler</h1>
          <Span>fırsatı kaçırma</Span>
          <span className="padd bigfont">KOD ACIKTIRIR</span>
          <span className="padd bigfont">PİZZA, DOYURUR</span>
          <Link to="/siparis-form">
            <Button>Acıktım</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
