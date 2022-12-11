import React from 'react';
import App from './App';
import { CookiesProvider } from 'react-cookie';

export default function CookieContext({ children }) {
    return (
        <CookiesProvider>
            {children}
        </CookiesProvider>
    );
}