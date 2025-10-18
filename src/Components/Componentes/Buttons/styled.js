import styled from "styled-components";




const ButtonCard = styled.button`
 transform: translate(-50%, 125%);
 width: 60%;
 border-radius: 1rem;
 border: none;
 background-color: #FB1317;
 color: #fff;
 font-size: 1rem;
 padding: .5rem 1rem;
 position: absolute;
 left: 50%;
 bottom: 0;
 opacity: 0;
 transition: 0.3s ease-out;

 @media (max-width: 768px)  {
      opacity: 1;
      transform: translate(-50%, 70%);
      cursor: pointer;
  }

`;





export { ButtonCard }