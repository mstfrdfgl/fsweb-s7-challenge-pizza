import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "../components/Navbar";
import CardElement from "../components/Card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: url("../Assets/mile1-assets/home-banner.png");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  text-align: center;
`;

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

const SatisfySpan = styled.span`
  font-family: "Satisfy", cursive;
  font-size: 1.5rem;
  color: #fdc913;
`;
const RedSatisfySpan = styled(SatisfySpan)`
  color: #ce2829;
`;
const BigFontSpan = styled.span`
  font-size: 3rem;
  font-weight: bold;
  margin: 1rem 0;
`;

const SectionA = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 6rem 0;
  gap: 1rem;
  align-items: stretch;
  font-family: "Roboto Condensed";
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Divl = styled.div`
  background-image: url("../../Assets/mile2-aseets/cta/kart-1.png");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  text-align: left;
  border-radius: 8px;
  padding: 1rem;
  flex: 1;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const DivrContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 1rem;
`;

const Divr = styled.div`
  background-image: url("../../Assets/mile2-aseets/cta/kart-2.png");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  text-align: left;
  border-radius: 8px;
  padding: 1rem;
  flex: 1;
  min-height: 150px;
`;

const Divrs = styled(Divr)`
  background-image: url("../../Assets/mile2-aseets/cta/kart-3.png");
  background-position: center;
  background-size: cover;
`;
const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const SectionB = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-family: "Roboto Condensed";
`;
const SectionBSpan = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
`;

function Anasayfa() {
  return (
    <Container>
      <Header>
        <SatisfySpan>fırsatı kaçırma</SatisfySpan>
        <BigFontSpan>KOD ACIKTIRIR</BigFontSpan>
        <BigFontSpan>PİZZA, DOYURUR</BigFontSpan>
        <Link to="/siparis-form">
          <Button>Acıktım</Button>
        </Link>
      </Header>
      <Navigation />
      <SectionA>
        <Divl>
          <DivContent>
            <h2>Özel Lezzetus</h2>
            <p>Position: Absolute Acı Burger</p>
            <Link to="/siparis-form">
              <Button>SİPARİŞ VER</Button>
            </Link>
          </DivContent>
        </Divl>
        <DivrContainer>
          <Divr>
            <DivContent>
              <h2>Hackathlon Burger Menü</h2>
              <Link to="/siparis-form">
                <Button>SİPARİŞ VER</Button>
              </Link>
            </DivContent>
          </Divr>
          <Divrs>
            <DivContent>
              <h2>Çooook hızlı npm gibi kurye</h2>
              <Link to="/siparis-form">
                <Button>SİPARİŞ VER</Button>
              </Link>
            </DivContent>
          </Divrs>
        </DivrContainer>
      </SectionA>
      <SectionB>
        <RedSatisfySpan>en çok paketlenen menüler</RedSatisfySpan>
        <SectionBSpan>Acıktıran Kodlara Doyuran Lezzetler</SectionBSpan>
      </SectionB>
      <Navigation />
      <CardElement />
    </Container>
  );
}

export default Anasayfa;
