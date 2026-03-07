// src/components/process/Process.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/Process.module.css';

const Process: React.FC = () => {
    const { t } = useTranslation();

    const steps = ['discussion', 'development', 'testing', 'launch'] as const;

    return (
        <section id="process" className={styles.process}>
            <div className={`container ${styles.processContainer}`}>
                <div className={styles.header}>
                    <p className={styles.eyebrow}>Process</p>
                    <h2 className={styles.title}>{t('process.title')}</h2>
                    <p className={styles.subtitle}>{t('process.subtitle')}</p>
                </div>

                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <article key={step} className={styles.card}>
                            <div className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</div>
                            <h3 className={styles.cardTitle}>{t(`process.steps.${step}.title`)}</h3>
                            <p className={styles.cardDescription}>{t(`process.steps.${step}.description`)}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
