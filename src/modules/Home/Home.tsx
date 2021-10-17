import React from 'react';
import { Section } from '../Section';
import { Button } from 'reactstrap';
import { useEvents } from './useEvents';

export const Home = () => {
    const { clickHandler } = useEvents();
    return (
        <Section>
            <div> Home Content </div>
            <Button onClick={clickHandler}> Click Me</Button>
        </Section>
    );
}
