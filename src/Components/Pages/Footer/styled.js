import styled from "styled-components";


const FooterSection = styled.section`
  width: 100%;
  background: #000000;
  padding-top: 60px;
  z-index: 900;
  color: #F4F6F8;

  @media (max-width: 768px) {
    padding-top: 40px;
  }

  @media (max-width: 480px) {
    padding-top: 30px;
  }
`;

const FooterTop = styled.footer`
  display: grid;
  border-bottom: 2px solid #ffffff33;
  padding-bottom: 20px;
  margin: 0 30px;

  @media (max-width: 480px) {
    margin: 0 10px;
  }
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 30px;

  @media (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    margin-right: 50px;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    gap: 15px;
    margin-bottom: 20px;
  }
`;

const LinksColumn = styled.div`
  display: grid;
  gap: 10px;
  text-align: center;

  h2 {
    margin: 0 0 10px;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.96);
  }

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 13px;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }
  }

  p {
    margin: 0;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
  }

  @media (min-width: 400px) {
    text-align: left;
  }

  @media (max-width: 480px) {
    text-align: center;
    h2 {
      font-size: 11px;
    }
    a, p {
      font-size: 10px;
    }
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  font-size: 24px;
  margin-top: 10px;

  a {
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }
  }

  @media (min-width: 400px) {
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    gap: 12px;
    font-size: 20px;
  }
`;

const FooterBottom = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px 0;
  text-align: center;
  margin: 0 30px;

  @media (min-width: 400px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    gap: 20px;
  }

  @media (min-width: 640px) {
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    margin: 0 10px;
    gap: 6px;
  }
`;

const Legal = styled.div`
  font-size: 12px;

  a {
    margin-left: 4px;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;

    &:hover {
      color: #ffffff;
    }
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;


export { Copyright, Legal, FooterBottom, Socials, FooterSection, FooterTop, Links, LinksColumn }