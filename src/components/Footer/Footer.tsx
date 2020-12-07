import React, { useContext } from 'react';
import { useSpring, config } from 'react-spring';
import {
  FooterWrapper,
  FooterContainer,
  FooterLink,
  FooterText
} from './Footer.styles';
import { ModalsState } from '../../shared/context';

const Footer = () => {
  const { isSidebarVisible } = useContext(ModalsState);
  const spring = useSpring({
    config: config.molasses,
    from: { 
      opacity: isSidebarVisible ? 0.2 : 1
    },
    to: async (next) => {
      await next({
        opacity: isSidebarVisible ? 0.2 : 1
      });
    }
  });
  return (
    <FooterWrapper>
      <FooterContainer style={spring} $isSidebarVisible={isSidebarVisible}>
        <FooterLink to='/contact' $isSidebarVisible={isSidebarVisible}> Contact </FooterLink>
        <FooterLink to='/philosohpy' $isSidebarVisible={isSidebarVisible}> Philosophy </FooterLink>
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
