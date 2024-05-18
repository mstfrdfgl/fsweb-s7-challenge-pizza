import React from "react";
import styled from "styled-components";
const Foot = styled.footer`
  background-color: #333;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  flex-wrap: wrap;
  font-family: "Roboto Condensed";
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const FooterTitle = styled.h3`
  border-bottom: 2px solid #fdc913;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const FooterItem = styled.p`
  margin: 0.5rem 0;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
`;
const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;
const ImageItem = styled.img`
  width: 25%;
  margin-bottom: 0.5rem;
`;
export default function Footer() {
  return (
    <>
      <Foot>
        <FooterSection>
          <FooterTitle>Teknolojik Yemekler</FooterTitle>
          <FooterItem>
            <Icon src="../../Assets/mile2-aseets/footer/icons/icon-1.png" />
            341 Londonderry Road, Istanbul Türkiye
          </FooterItem>
          <FooterItem>
            <Icon src="../../Assets/mile2-aseets/footer/icons/icon-2.png" />
            aciktim@teknolojikyemekler.com
          </FooterItem>
          <FooterItem>
            <Icon src="../../Assets/mile2-aseets/footer/icons/icon-3.png" />
            +90 216 123 45 67
          </FooterItem>
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
          <Images>
            <ImageItem src="../../Assets/mile2-aseets/footer/insta/li-0.png" />
            <ImageItem src="../../Assets/mile2-aseets/footer/insta/li-1.png" />
            <ImageItem src="../../Assets/mile2-aseets/footer/insta/li-2.png" />
            <ImageItem src="../../Assets/mile2-aseets/footer/insta/li-3.png" />
            <ImageItem src="../../Assets/mile2-aseets/footer/insta/li-4.png" />
            <ImageItem src="../../Assets/mile2-aseets/footer/insta/li-5.png" />
          </Images>
        </FooterSection>
      </Foot>
    </>
  );
}
