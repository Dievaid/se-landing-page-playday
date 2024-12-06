import React from 'react';
import { Navbar } from './components/Navbar';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

import { PostHogProvider } from 'posthog-js/react';

const apiKey = import.meta.env.VITE_APP_PUBLIC_POSTHOG_KEY;
const options = {
    api_host: import.meta.env.VITE_APP_PUBLIC_POSTHOG_HOST,
}

export const App: React.FC = () => {
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