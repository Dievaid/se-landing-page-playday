import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

import { PostHogProvider } from 'posthog-js/react';

const apiKey = process.env.REACT_APP_POSTHOG_KEY;
const options = {
    api_host: process.env.REACT_APP_POSTHOG_HOST,
}

export const App : React.FC = () => {
    useEffect(() => {
        console.log(apiKey, options);
    }, []);

    return (
        <PostHogProvider
            apiKey={apiKey}
            options={options}
        >
            <Navbar />
            <Content />
            <Footer />
        </PostHogProvider>
    );
}