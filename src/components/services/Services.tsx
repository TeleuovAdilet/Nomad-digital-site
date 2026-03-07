// src/components/services/Services.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/Services.module.css';

const Services: React.FC = () => {
    const { t } = useTranslation();

    const services = [
        { key: 'telegramBots', features: ['payments', 'crm', 'mailing', 'analytics'] },
        { key: 'websites', features: ['responsive', 'seo', 'fast', 'forms'] },
        { key: 'webApps', features: ['react', 'api', 'auth', 'admin'] },
        { key: 'design', features: ['tools', 'prototype', 'animations', 'system'] },
    ];

    return (
        <section id="services" className={styles.services}>
            <div className={`container ${styles.servicesContainer}`}>
                <div className={styles.header}>
                    <p className={styles.eyebrow}>Services</p>
                    <h2 className={styles.title}>{t('services.title')}</h2>
                    <p className={styles.subtitle}>{t('services.subtitle')}</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service) => (
                        <article key={service.key} className={styles.card}>
                            <h3 className={styles.cardTitle}>{t(`services.${service.key}.title`)}</h3>
                            <p className={styles.cardDescription}>{t(`services.${service.key}.description`)}</p>
                            <ul className={styles.featureList}>
                                {service.features.map((feature) => (
                                    <li key={feature} className={styles.featureItem}>
                                        {t(`services.${service.key}.features.${feature}`)}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
