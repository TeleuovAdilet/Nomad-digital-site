// src/i18n/config.ts
// Упрощенная версия без i18next-browser-languagedetector
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from './locales/ru.json';
import kk from './locales/kk.json';
import en from './locales/en.json';

// Простая функция определения языка
const getInitialLanguage = (): string => {
    // Проверяем localStorage
    const saved = localStorage.getItem('i18nextLng');
    if (saved && ['ru', 'kk', 'en'].includes(saved)) {
        return saved;
    }

    // Проверяем язык браузера
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('ru')) return 'ru';
    if (browserLang.startsWith('kk')) return 'kk';
    if (browserLang.startsWith('en')) return 'en';

    // По умолчанию русский
    return 'ru';
};

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: { translation: ru },
            kk: { translation: kk },
            en: { translation: en },
        },
        lng: getInitialLanguage(),
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
    });

// Сохраняем выбранный язык
i18n.on('languageChanged', (lng) => {
    localStorage.setItem('i18nextLng', lng);
});

export default i18n;