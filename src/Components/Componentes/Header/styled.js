import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const MainHeader = styled.header`
  width: 100%;
  height: 90px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1000;
  box-shadow: 0px 2px 8px #0000001a;

  @media (max-width: 768px) {
    height: auto;
    position: fixed;
    bottom: 0;
    top: auto;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 0px -2px 8px #0000001a;
  }
`;

const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  max-width: 1200px;
  border: 3px solid #FB1317;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
    padding: 0.5rem 0;
  }
`;

const ImgNavBar = styled.img`
  width: 80px;
  height: auto;

  @media (max-width: 768px) {
    display: none; 
  }
`;


const LinkHeader = styled(Link)`
  text-decoration: none;
  color: #560708ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  transition: transform 0.2s ease, color 0.2s ease;

  
  &:hover {
    color: #8a0b0b;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background: #ff4b4b;
  color: #fff;
  font-size: 0.75rem;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    top: -6px;
    right: -6px;
    width: 16px;
    height: 16px;
    font-size: 0.7rem;
  }
`;

 const IconText = styled.span`
  margin-top: 5px;
  font-size: 0.85rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  transition: all 0.3s ease;

  &.active {
    color: #c21807; 
    transform: scale(1.1);
  }

  &:hover {
    color: #c21807;
  }
`;

export { IconText, MainHeader, NavHeader, ImgNavBar, LinkHeader, CartCount, CartIconWrapper, StyledNavLink }
