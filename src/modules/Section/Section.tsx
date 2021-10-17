import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface SectionProps {
    spacing?: string;
    children: ReactNode;
}

export const Section = ({
    spacing = '2em',
    children
}: SectionProps) => <SectionContainer spacing={spacing}> { children }</SectionContainer>;

const SectionContainer = styled.div<{spacing: string;}>`
    padding: ${({ spacing }) => spacing};
`;