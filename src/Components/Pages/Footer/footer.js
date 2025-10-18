import { RiFacebookCircleFill } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { Copyright, Legal, FooterBottom, Socials, FooterSection, FooterTop, Links, LinksColumn } from './styled';



const Footer = () =>{
    return (
    <FooterSection>
      <FooterTop>
        <Links>
          <LinksColumn>
            <h2>Get Started</h2>
            <a href="#">Introduction</a>
            <a href="#">Documentation</a>
            <a href="#">Usage</a>
            <a href="#">Globals</a>
            <a href="#">Elements</a>
          </LinksColumn>

          <LinksColumn className="socials-column">
            <h2>Social Media</h2>
            <p>
              Follow us on social media to find out the latest updates on our
              progress.
            </p>
            <Socials>
              <a href="#"> <RiFacebookCircleFill size={25} /> </a>
              <a href="#"> <RiInstagramLine size={25} /> </a>
              <a href="#"> <RiLinkedinBoxLine size={25} /> </a>
            </Socials>
          </LinksColumn>
        </Links>
      </FooterTop>

      <FooterBottom>
        <Copyright>© 2025 All rights reserved</Copyright>
        <Legal>
          <a href="#">License</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </Legal>
      </FooterBottom>
    </FooterSection>
  );
};

export default Footer