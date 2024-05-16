import styled from "styled-components";
import "../anasayfa.css";
import { Link, Route, Switch } from "react-router-dom";
import SiparisFormSayfasi from "./SiparisFormSayfasi";
import Header from "../components/Header";
import { BigFontSpan, SatisfySpan } from "../components/Styled";
import Navigation from "../components/Navbar";
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

const Head = styled.header`
background-image: url("../Assets/mile1-assets/home-banner.png");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

`;
const AnasayfaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const SectionA = styled.section``;

const Divl = styled.div`
  color: black;
`;

const Divrf = styled.div`
  color: black;
`;

const Divrs = styled.div`
  color: black;
`;
export default function Anasayfa() {
  return (
    <>
      <AnasayfaDiv>
        <Head>
          <SatisfySpan>fırsatı kaçırma</SatisfySpan>
          <BigFontSpan>KOD ACIKTIRIR</BigFontSpan>
          <BigFontSpan>PİZZA, DOYURUR</BigFontSpan>
          <Link to="/siparis-form">
            <Button>Acıktım</Button>
          </Link>
        </Head>
        <Navigation />
        <SectionA>
          <Divl>
            <h2>Özel Lezzetus</h2>
            <p>Position Absolute Acı Burger</p>
            <button>tıkla</button>
          </Divl>
          <Divrf>
            <h2>Hackathlon Burger Menü</h2>
            <button>tıkla</button>
          </Divrf>
          <Divrs>
            <h2>Çooook hızlı npm gibi kurye</h2>
            <button>tıkla</button>
          </Divrs>
        </SectionA>
      </AnasayfaDiv>
    </>
  );
}
