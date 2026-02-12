// src/components/Hero/Hero.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/Hero.module.css';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    // WhatsApp номер - замените на свой
    const whatsappNumber = '77475474341'; // Формат: 77777777777
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.backgroundGradient} />
                <div className={styles.backgroundGradient} />
                <div className={styles.floatingElement} />
                <div className={styles.floatingElement} />
                <div className={styles.floatingElement} />
            </div>

            <div className={`container ${styles.heroContent}`}>
                <div className={styles.badge}>
                    <span className={styles.badgeText}>{t('hero.badge')}</span>
                </div>

                <h1 className={styles.title}>
                    {t('hero.title')}
                    <br />
                    <span className={styles.titleGradient}>{t('hero.titleGradient')}</span>
                </h1>

                <p className={styles.subtitle}>{t('hero.subtitle')}</p>

                <div className={styles.actions}>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                        {t('hero.ctaPrimary')}
                    </a>
                    <a href="#portfolio" className={styles.secondaryButton}>
                        {t('hero.ctaSecondary')}
                    </a>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>15+</div>
                        <div className={styles.statLabel}>{t('hero.stats.projects')}</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>2</div>
                        <div className={styles.statLabel}>{t('hero.stats.experience')}</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>10+</div>
                        <div className={styles.statLabel}>{t('hero.stats.clients')}</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>24/7</div>
                        <div className={styles.statLabel}>{t('hero.stats.support')}</div>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.scrollMouse}>
                    <div className={styles.scrollWheel} />
                </div>
            </div>
        </section>
    );
};

export default Hero;