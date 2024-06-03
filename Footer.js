import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
 
import { StyledButton } from "react95";
import { HashLink } from 'react-router-hash-link';
const Footer = () => {
    return (
        <Box>
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading><HashLink to="/#Top"><StyledButton primary style={{fontSize: '22px', padding:'1.5rem'}}><b>Home</b></StyledButton></HashLink></Heading>
                    </Column>
                    <Column>
                        <Heading><StyledButton primary style={{fontSize: '22px', padding:'1.5rem'}}><b>Experience</b></StyledButton></Heading>
                    </Column>
                    <Column>
                        <Heading><StyledButton primary style={{fontSize: '22px', padding:'1.5rem'}}><b>Contact Me</b></StyledButton></Heading>
                    </Column>
                    <Column>
                        <Heading><StyledButton primary style={{fontSize: '22px', padding:'1.5rem'}}><b>LinkedIn</b></StyledButton></Heading>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;
