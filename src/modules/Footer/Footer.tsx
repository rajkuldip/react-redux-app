import React from 'react';
import styled from 'styled-components';

export const Footer = () => (
    <FooterContainer>
        Footer Content will come here.
    </FooterContainer>
);


const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right:0;
    text-align: center;
    background-color: #FFFFFF;
    height: 100px;
    padding: 20px;
`;