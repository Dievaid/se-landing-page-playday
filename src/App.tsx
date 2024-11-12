import React from 'react';
import { Navbar } from './components/Navbar';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

export const App : React.FC = () => {
    return (
        <>
            <Navbar />
            <Content />
            <Footer />
        </>
    );
}