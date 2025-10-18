import styled from "styled-components";

const OffersContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  gap: 1.5em;
  padding: 2em;
  justify-items: center;
  background-color: #fafafa;

  @media (max-width: 768px) {
    gap: 1em;
    padding: 1.5em;
  }

  @media (max-width: 480px) {
    gap: 0.8em;
    padding: 1em;
  }
`;


const OffersMain = styled.main`
  width: 100%;
  max-width: 22em;
  background: #f4f6f8;
  color: #560708;
  font-weight: 600;
  border: 3px solid #fb1317;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(87, 2, 2, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(87, 2, 2, 0.2);
  }

  &::before {
    content: "25%";
    position: absolute;
    top: 10px;
    right: 10px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #ef476f;
    color: #fff;
    font-weight: 800;
    font-size: 1rem;
    transition: transform 0.3s ease;

    @media (max-width: 480px) {
      width: 45px;
      height: 45px;
      font-size: 0.85rem;
    }
  }

  &:hover::before {
    transform: scale(1.2) rotate(-20deg);
  }
`;


const OffersImg = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-bottom: 3px solid #fb1317;
  background-color: #fb1317;
`;


const OffersArt = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  text-align: center;
  background-color: #fff;
  padding: 1em;
  gap: 0.5em;
`;

const OffersTitle = styled.h2`
  font-weight: bold;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  color: #000;
  margin: 0.3em 0;
`;

const OffersText = styled.p`
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  color: #333;
  margin-bottom: 0.8em;
`;

export { OffersContainer, OffersMain, OffersArt, OffersTitle, OffersImg, OffersText };
