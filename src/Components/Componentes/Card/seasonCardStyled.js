import styled from "styled-components";

const SeasonCardMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

const SeasonCardArt = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 22em; 
  height: auto;
  border: 3px solid #fb1317;
  box-shadow: 0 4px 12px rgba(87, 2, 2, 0.1);
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(87, 2, 2, 0.2);
  }
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    border-width: 2px;
    border-radius: 8px;
  }
`;

const SeasonProductImg = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3; 
  border-bottom: 3px solid #fb1317;
`;

const SeasonProductTitle = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(1.1rem, 1vw + 0.5rem, 1.25rem);
  font-weight: 500;
  color: #000;
  margin: 10px 0 5px 0;
  text-align: center;
`;

const SeasonProductPrice = styled.p`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: clamp(1rem, 1vw + 0.4rem, 1.2rem);
  color: #000;
  margin-bottom: 10px;
`;

export {
  SeasonCardArt,
  SeasonCardMain,
  SeasonProductTitle,
  SeasonProductPrice,
  SeasonProductImg,
};
