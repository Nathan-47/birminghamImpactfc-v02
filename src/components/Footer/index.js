import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, 
    FooterLinksWrapper, FooterLinkItems, FooterLinkTitle} from './FooterElements';
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaRegCopyright} from "react-icons/fa";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                        <a href='https://www.facebook.com/BImpactFC/'  id="socialicons"><FaFacebookF /></a>
                        <a href='https://www.instagram.com/birmingham_impact_fc/' id="socialicons"><FaInstagram /></a>
                        <a href='https://twitter.com/B_Impact_FC'  id="socialicons"><FaTwitter /></a>
                        </FooterLinkTitle>
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                    </FooterLinksContainer>

                    <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle id="footercopy"><FaRegCopyright font-size="0.65rem" />Birmingham Impact Football Club 2023. All rights reseved</FooterLinkTitle>
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                    
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                      <a href ='https://www.linkedin.com/in/nathanparchment/'  id="footer-built">MENTPARCH</a>
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
} 

export default Footer;