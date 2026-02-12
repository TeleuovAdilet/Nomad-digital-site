// src/components/Navigation/Navigation.tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { Language } from '../../types';
import styles from '../../styles/Navigation.module.css';

const Navigation: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lang: Language) => {
        i18n.changeLanguage(lang);
        setIsLangDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    const languages = {
        ru: 'RU',
        kk: 'KZ',
        en: 'EN',
    };

    const currentLang = (i18n.language as Language) || 'ru';

    // Номер WhatsApp - замените на свой
    const whatsappNumber = '77475474341'; // Ваш номер в формате 77777777777
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <>
            <nav className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={`container ${styles.navContainer}`}>
                    <a href="#" className={styles.logo}>
                        <div className={styles.logoIcon}>N</div>
                        <span className={styles.logoText}>Nomad Digital</span>
                    </a>

                    <div className={styles.navLinks}>
                        <a href="#services" className={styles.navLink}>
                            {t('nav.services')}
                        </a>
                        <a href="#portfolio" className={styles.navLink}>
                            {t('nav.portfolio')}
                        </a>
                        <a href="#process" className={styles.navLink}>
                            {t('nav.process')}
                        </a>

                        {/* Dropdown Language Selector */}
                        <div className={styles.languageDropdown}>
                            <button
                                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                                className={styles.langButton}
                            >
                                {languages[currentLang]}
                                <span className={styles.arrow}>▼</span>
                            </button>
                            {isLangDropdownOpen && (
                                <div className={styles.langDropdownMenu}>
                                    <button
                                        onClick={() => changeLanguage('ru')}
                                        className={`${styles.langOption} ${currentLang === 'ru' ? styles.active : ''}`}
                                    >
                                        RU - Русский
                                    </button>
                                    <button
                                        onClick={() => changeLanguage('kk')}
                                        className={`${styles.langOption} ${currentLang === 'kk' ? styles.active : ''}`}
                                    >
                                        KZ - Қазақша
                                    </button>
                                    <button
                                        onClick={() => changeLanguage('en')}
                                        className={`${styles.langOption} ${currentLang === 'en' ? styles.active : ''}`}
                                    >
                                        EN - English
                                    </button>
                                </div>
                            )}
                        </div>

                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                            {t('nav.contact')}
                        </a>
                    </div>

                    <button
                        className={styles.mobileMenuButton}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </nav>

            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileNavLinks}>
                    <a href="#services" className={styles.mobileNavLink} onClick={handleNavClick}>
                        {t('nav.services')}
                    </a>
                    <a href="#portfolio" className={styles.mobileNavLink} onClick={handleNavClick}>
                        {t('nav.portfolio')}
                    </a>
                    <a href="#process" className={styles.mobileNavLink} onClick={handleNavClick}>
                        {t('nav.process')}
                    </a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.mobileNavLink} onClick={handleNavClick}>
                        {t('nav.contact')}
                    </a>
                </div>

                <div className={styles.mobileLangSelector}>
                    <button onClick={() => changeLanguage('ru')} className={`${styles.langButton} ${currentLang === 'ru' ? styles.active : ''}`}>
                        RU
                    </button>
                    <button onClick={() => changeLanguage('kk')} className={`${styles.langButton} ${currentLang === 'kk' ? styles.active : ''}`}>
                        KZ
                    </button>
                    <button onClick={() => changeLanguage('en')} className={`${styles.langButton} ${currentLang === 'en' ? styles.active : ''}`}>
                        EN
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navigation;