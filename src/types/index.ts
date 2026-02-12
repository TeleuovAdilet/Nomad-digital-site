// src/types/index.ts

export interface Service {
    icon: string;
    titleKey: string;
    descriptionKey: string;
    features: string[];
}

export interface PortfolioItem {
    titleKey: string;
    category: string;
    descriptionKey: string;
    image: string;
    tags: string[];
    color: string;
}

export interface Step {
    number: string;
    titleKey: string;
    descriptionKey: string;
}

export interface ContactFormData {
    name: string;
    phone: string;
    message: string;
}

export type Language = 'ru' | 'kk' | 'en';

export interface Translation {
    [key: string]: string | Translation;
}