import styled from "styled-components";

const MainOffers = styled.main`
  background: #F4F6F8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  box-sizing: border-box;
`;
const ArtOffers = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    padding-bottom: 6rem; 
  }
`;


export { MainOffers, ArtOffers }