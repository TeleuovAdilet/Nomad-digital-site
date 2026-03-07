// src/App.tsx
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Navigation from './components/navigation';
import Hero from './components/hero';
import Services from './components/services';
import Process from './components/process';
import '@/styles/globals.css';

const App: React.FC = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <div className="app">
                <Navigation />
                <main>
                    <Hero />
                    <Services />
                    <Process />
                    {/* Остальные секции будут добавлены здесь */}
                    {/* <Services /> */}
                    {/* <Portfolio /> */}
                    {/* <Process /> */}
                    {/* <Contact /> */}
                    {/* <Footer /> */}
                </main>
            </div>
        </I18nextProvider>
    );
};

export default App;
