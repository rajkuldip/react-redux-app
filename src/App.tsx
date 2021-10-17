import React from 'react';
import styled from 'styled-components';
import { Header } from './modules/Header';


export const App = () => (
   <HeaderContainer>
        <Header />
    </HeaderContainer>
);

const HeaderContainer = styled.div`
    background-color: #FFF;
    padding: 2em;
    min-height: 70px;
`;