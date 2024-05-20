import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SatisfySpan, BigFontSpan } from "../components/Styled";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #ce2829;
  color: white;
  font-family: "Roboto Condensed";
  box-sizing: border-box;
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
  width: 100%;
`;

const FormOnayDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 15rem;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const LigthSpan = styled.span`
  font-weight: 200;
`;

const FiyatBorderDiv = styled.div`
  border: 0.5px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
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
            <p>
              <LigthSpan>İsim Soyisim: </LigthSpan>
              <BoldSpan>{isimSoyisim}</BoldSpan>
            </p>
            <p>
              <LigthSpan>Boyut: </LigthSpan>
              <BoldSpan>{boyut}</BoldSpan>
            </p>
            <p>
              <LigthSpan>Hamur Kalınlığı: </LigthSpan>
              <BoldSpan>{kalınlık}</BoldSpan>
            </p>
            <p>
              <LigthSpan>Malzemeler: </LigthSpan>
              <BoldSpan>
                {Object.keys(malzemeler)
                  .filter((malzeme) => malzemeler[malzeme])
                  .join(", ")}
              </BoldSpan>
            </p>
            <FiyatBorderDiv>
              <BoldSpan>Sipariş Toplamı</BoldSpan>
              <p>
                <LigthSpan>Malzeme Fiyatı: </LigthSpan>
                <BoldSpan>{malzemeFiyati} ₺</BoldSpan>
              </p>
              <p>
                <LigthSpan>Toplam Fiyat: </LigthSpan>
                <BoldSpan>{fiyat} ₺</BoldSpan>
              </p>
            </FiyatBorderDiv>
          </FormOnayDiv>
        </Section>
      </Container>
    </>
  );
}
