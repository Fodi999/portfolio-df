"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

if (!i18n.isInitialized) {
  i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en", // Язык по умолчанию
      supportedLngs: ["en", "ru", "pl"], // Поддерживаемые языки
      nonExplicitSupportedLngs: true, // Обработка языков без регионов
      debug: process.env.NODE_ENV === "development",
      interpolation: {
        escapeValue: false, // React уже защищён от XSS
      },
      backend: {
        loadPath: "/locales/{{lng}}/translation.json",
      },
      detection: {
        order: ["localStorage", "navigator"], // Проверка языка в localStorage и браузере
        caches: ["localStorage"], // Кэширование выбранного языка
      },
    });
}

export default i18n;







