import styled from "styled-components";
import SiparisFormSayfasi from "./SiparisFormSayfasi";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { SatisfySpan, BigFontSpan } from "../components/Styled";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ce2829;
  color: white;
  font-family: "Roboto Condensed";
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Hr = styled.hr`
  border-top: 1px solid #5f5f5f;
  width: 100%;
`;

const FormOnayDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
export default function SiparisOnaySayfasi() {
  const location = useLocation();
  const { siparisId, siparis } = location.state || {};
  location.state || {};
  const { boyut, kalınlık, malzemeler, malzemeFiyati, fiyat, isimSoyisim } =
    siparis;
  return (
    <>
      <Container className="siparis-onay-container">
        <Section>
          <SatisfySpan className="padd">lezzetin yolda</SatisfySpan>
          <BigFontSpan>SİPARİŞ ALINDI</BigFontSpan>
          <Hr />
          <h2 className="padd">Position Absolute Acı Pizza</h2>
          <FormOnayDiv>
            <p>İsim Soyisim: {isimSoyisim}</p>
            <p>Boyut: {boyut}</p>
            <p>Hamur Kalınlığı: {kalınlık}</p>
            <p>
              Malzemeler:{" "}
              {Object.keys(malzemeler)
                .filter((malzeme) => malzemeler[malzeme])
                .join(", ")}
            </p>
            <p>Malzeme Fiyatı: {malzemeFiyati} ₺</p>
            <p>Toplam Fiyat: {fiyat} ₺</p>
          </FormOnayDiv>
        </Section>
      </Container>
    </>
  );
}
