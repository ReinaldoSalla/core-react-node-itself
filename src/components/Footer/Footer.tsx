import React from 'react';
import { useSpring, config } from 'react-spring';
import {
  FooterWrapper,
  FooterContainer,
  FooterLink,
  FooterText
} from './Footer.styles';

const Footer = ({
  isSidebarVisible
}) => {
  const spring = useSpring({
    config: config.molasses,
    from: { 
      opacity: isSidebarVisible ? 0.5 : 1
    },
    to: async (next) => {
      await next({
        opacity: isSidebarVisible ? 0.5 : 1
      });
    },
  });
  return (
    <FooterWrapper>
      <FooterContainer style={spring} disabled={isSidebarVisible}>
        <FooterLink to='/contact'> Contact </FooterLink>
        <FooterLink to='/philosohpy'> Philosophy </FooterLink>
        <FooterText>
          Copyright © {new Date().getFullYear()} JavaScriptTemporal
        </FooterText>
        <FooterText>
          All the code in this website in MIT licensed
        </FooterText>
        <FooterText italic>
          Always bet on JS
        </FooterText>        
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
