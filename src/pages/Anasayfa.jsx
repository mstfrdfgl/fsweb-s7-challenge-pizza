import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "../components/Navbar";

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
  justify-content: center;
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
  width: 70%;
  margin: 6rem 0;
  gap: 1rem;
  align-items: stretch;
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
  width: 100% @media (max-width: 600px) {
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
`;
const SectionBSpan = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
`;
const Footer = styled.footer`
  background-color: #333;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 1rem;
`;

const FooterTitle = styled.h3`
  border-bottom: 2px solid #fdc913;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

const FooterItem = styled.p`
  margin: 0.5rem 0;
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
            <Button>SİPARİŞ VER</Button>
          </DivContent>
        </Divl>
        <DivrContainer>
          <Divr>
            <DivContent>
              <h2>Hackathlon Burger Menü</h2>
              <Button>SİPARİŞ VER</Button>
            </DivContent>
          </Divr>
          <Divrs>
            <DivContent>
              <h2>Çooook hızlı npm gibi kurye</h2>
              <Button>SİPARİŞ VER</Button>
            </DivContent>
          </Divrs>
        </DivrContainer>
      </SectionA>
      <SectionB>
        <RedSatisfySpan>en çok paketlenen menüler</RedSatisfySpan>
        <SectionBSpan>Acıktıran Kodlara Doyuran Lezzetler</SectionBSpan>
      </SectionB>
      <Navigation />
      <Footer>
        <FooterSection>
          <FooterTitle>Teknolojik Yemekler</FooterTitle>
          <FooterItem>341 Londonderry Road, Istanbul Türkiye</FooterItem>
          <FooterItem>aciktim@teknolojikyemekler.com</FooterItem>
          <FooterItem>+90 216 123 45 67</FooterItem>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Sıcak Menüler</FooterTitle>
          <FooterItem>Terminal Pizza</FooterItem>
          <FooterItem>5 Kişilik Hackathlon Pizza</FooterItem>
          <FooterItem>useEffect Tavuklu Pizza</FooterItem>
          <FooterItem>Beyaz Console Frosty</FooterItem>
          <FooterItem>Tester Geçti Mutlu Burger</FooterItem>
          <FooterItem>Position Absolute Acı Burger</FooterItem>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Instagram</FooterTitle>
          {/* Instagram görselleri burada */}
        </FooterSection>
      </Footer>
    </Container>
  );
}

export default Anasayfa;
