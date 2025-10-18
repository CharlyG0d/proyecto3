import styled from "styled-components"

const MainHome = styled.main`
    background-color: #F4F6F8;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const TitleHome = styled.h1`
    font-size: clamp(1.5rem, 2.5vw, 2.400rem);
`;
const SectionHome = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 20px;
`;

const SeasonSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;          
  justify-items: center;
  margin-top: 2rem;
`;

const SeasonCardTitle = styled.h1`
font-size: 24px;
`;


export { MainHome, TitleHome, SectionHome, SeasonSection, SeasonCardTitle };