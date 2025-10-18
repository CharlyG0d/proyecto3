import styled from "styled-components";
import { Link } from "react-router-dom";


 const CartMain = styled.main`
  width: 80%;
  max-width: 960px;
  margin: 0 auto;
  padding: 5% 0;

  @media (max-width: 768px) {
    width: 90%;
    padding: 3% 0;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 2% 0;
  }
`;
const CartTitle = styled.h1`
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  padding: 1em 0;
  border-bottom: 1px solid #dadada;
  letter-spacing: 3px;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;
const Heading = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d0d0d0;
  padding: 1em 0;

  h1 {
    font-size: 2em;
    @media (max-width: 480px) {
      font-size: 1.5em;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;
const ContinueBtn = styled(Link)`
  text-decoration: none;
  background: #fb1317;
  color: #fff;
  font-weight: bold;
  border-radius: 50px;
  padding: 1em;
  transition: all 0.25s linear;

  &:hover {
    background: #f1754fff;
  }

  @media (max-width: 480px) {
    padding: 0.8em 1em;
    font-size: 0.9em;
  }
`;

const CartContainer = styled.article`
  padding: 1em 0;
  border: 1px solid #7b1f1fff;
`;

const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CartItem = styled.li`
  padding: 1.5em;
  border-bottom: 1px solid #7b1f1fff;
  background: #f4f6f8;

  @media (max-width: 480px) {
    padding: 1em;
  }
`;

const CartInfo = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const CartSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;

  img.itemImg {
    width: 10em;
    margin: 1.5em 0;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 480px) {
      width: 7em;
      margin: 1em 0;
    }
  }

  p.stockStatus {
    color: #82ca9c;
    font-weight: bold;
    text-transform: uppercase;

    &.out {
      color: #f69679;
    }
  }
`;

const RemoveBtn = styled.button`
  background: #e0e0e0;
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 100%;
  width: 2em;
  height: 2em;
  cursor: pointer;
  transition: all 0.25s linear;

  &:hover {
    background: #f30;
  }

  @media (max-width: 480px) {
    width: 1.5em;
    height: 1.5em;
  }
`;

const Subtotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: 2em 1em 0 0;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 0.5em;
    text-align: right;

    &.final {
      font-size: 1.25em;
      font-weight: bold;
    }
  }

  .label {
    text-transform: uppercase;
    color: #777;
    margin-right: 1em;
  }

  .value {
    font-weight: bold;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-end;
    margin: 1em 0 0 0;

    li {
      text-align: right;
      padding: 0.25em 0;
      &.final {
        font-size: 1.1em;
      }
    }
  }
`;


export { Subtotal, RemoveBtn, CartContainer, CartInfo, CartItem, CartList, CartMain, CartTitle, Heading, ContinueBtn, CartSection }