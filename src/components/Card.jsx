import React from "react";
import styled from "styled-components";
import { Card, CardBody, CardTitle } from "reactstrap";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem;
`;

const StyledCard = styled(Card)`
  width: 18rem;
  margin: 1rem;
  background-color: #f2f2f2;
  border-radius: 1.5rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardSpanContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

const CardSpan = styled.span`
  padding: 0.5rem;
  color: #5f5f5f;
  font-weight: bold;
`;

const CardPrice = styled.span`
  padding: 0.5rem;
  color: black;
  font-weight: bold;
  font-size: 1.1rem;
`;

export default function CardElement() {
  const cards = [
    {
      imgSrc: "../../Assets/mile2-aseets/pictures/food-1.png",
      title: "Terminal Pizza",
      spans: ["4.9", "(1907)"],
      fiyat: "60₺",
    },
    {
      imgSrc: "../../Assets/mile2-aseets/pictures/food-2.png",
      title: "Position Absolute Acı Pizza",
      spans: ["4.9", "(1907)"],
      fiyat: "85₺",
    },
    {
      imgSrc: "../../Assets/mile2-aseets/pictures/food-3.png",
      title: "useEffect Tavuklu Burger",
      spans: ["4.9", "(1907)"],
      fiyat: "75₺",
    },
  ];

  return (
    <CardContainer>
      {cards.map((card, index) => (
        <StyledCard key={index}>
          <CardImage alt={`Card image`} src={card.imgSrc} />
          <CardBody>
            <CardTitle tag="h3">{card.title}</CardTitle>
            <CardSpanContainer>
              {card.spans.map((span, i) => (
                <CardSpan key={i}>{span}</CardSpan>
              ))}
              <CardPrice>{card.fiyat}</CardPrice>
            </CardSpanContainer>
          </CardBody>
        </StyledCard>
      ))}
    </CardContainer>
  );
}
