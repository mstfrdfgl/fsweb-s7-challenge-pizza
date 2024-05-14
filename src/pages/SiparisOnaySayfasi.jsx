import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ce2829;
  color: white;
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
const Span = styled.span`
  font-family: Satisfy;
  color: #fdc913;
`;
const Hr = styled.hr`
  border-top: 1px solid #5f5f5f;
  width: 100%;
`;
export default function SiparisOnaySayfasi() {
  return (
    <>
      <Container className="siparis-onay-container">
        <Section>
          <h1>Teknolojik Yemekler</h1>
          <Span className="padd">lezzetin yolda</Span>
          <span className="padd bigfont">SİPARİŞ ALINDI</span>
          <Hr />
          <h2 className="padd">Position Absolute Acı Pizza</h2>
        </Section>
      </Container>
    </>
  );
}
