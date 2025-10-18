import styled from "styled-components";
import { ButtonCard } from "../Buttons/styled";



const BestSellerCard = styled.article`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 width: 220px;
 height: 274px;
 border-radius: 20px;
 background: #f5f5f5;
 position: relative;
 padding: 1.5rem;
 border: 5px solid #f50505ff;
 transition: 0.5s ease-out;
 overflow: visible;
 cursor: pointer;
 text-align: center;

 &:hover{
 border-color: #FB1317;
 box-shadow: 0 4px 18px 0 #db2c2cc7;
 } 
 &:hover ${ButtonCard} {
    transform: translate(-50%, 60%);
    opacity: 1;
    cursor: pointer;

    @media (max-width: 768px) {
     justify-content: space-around;
     
  }
  }`;

const SectionBestSellerCard = styled.section`
 color: black;
 height: 100%;
 gap: .625em;
 display: grid;
 place-content: center;
 justify-items: center;
`

const TitleBestSellerCard = styled.p`
font-size: clamp(1.125rem, 1vw, 1.375rem);
 font-weight: bold;
 margin: 0;
 padding: 10px 0 5px 0;
`

const TextBestSellerCard = styled.p`
font-size: clamp(1rem, 1vw, 1.2rem);
color: #000000ff;
margin: 0;
padding-top: 5px;
`
const ImgBestSellerCard = styled.img`
 width: 230px;
 height: 170px;
 border: 3px solid #f50505ff;
`


export { BestSellerCard, SectionBestSellerCard, TextBestSellerCard, TitleBestSellerCard, ImgBestSellerCard };