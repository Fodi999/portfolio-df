"use client";

import "../i18n";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Page = () => {
  const { t, i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  // Список языков
  const languages = ["en", "ru", "pl"];

  useEffect(() => {
    setIsClient(true);
    const storedLanguage = localStorage.getItem("language") || "en";
    if (i18n.language !== storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length; // Переключение на следующий язык
    const nextLanguage = languages[nextIndex];
    i18n.changeLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage); // Сохранение выбранного языка
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center px-4 pt-safe-top pb-safe-bottom relative">
      {/* Кнопка переключения языка */}
      <button
        className="absolute top-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-2 md:p-3 shadow-lg hover:from-purple-600 hover:to-blue-600 transition duration-300 flex items-center justify-center gap-2 border-2 border-white"
        style={{ minWidth: "60px", minHeight: "40px" }}
        onClick={toggleLanguage}
      >
        <div className="flex flex-col items-center justify-center">
          <i className="bx bx-globe text-lg md:text-xl"></i>
          <span className="text-sm font-semibold">{i18n.language.toUpperCase()}</span>
        </div>
      </button>

      {/* Основной контент */}
      <div className="w-full max-w-7xl bg-white overflow-hidden rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row h-full">
          {/* Левая часть с фото */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src="/00031.jpg"
              alt="Card Image"
              width={800}
              height={800}
              priority
              className="w-full h-auto md:h-full object-cover object-center"
            />
            {/* Иконки соцсетей */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <i className="bx bxl-instagram text-2xl sm:text-3xl text-white"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <i className="bx bxl-facebook text-2xl sm:text-3xl text-white"></i>
              </a>
              <a
                href="mailto:example@gmail.com"
                className="hover:text-gray-300 transition duration-300"
              >
                <i className="bx bxl-gmail text-2xl sm:text-3xl text-white"></i>
              </a>
            </div>
          </div>

          {/* Правая часть - текст */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center bg-gradient-to-b from-gray-100 to-gray-300">
            <h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-700">{t("description")}</p>

            {/* Кнопка "Мои работы" */}
            <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-500 shadow-inner transition duration-300 flex items-center gap-2 mx-auto md:mx-0">
              <i className="bx bx-briefcase text-lg sm:text-xl"></i>
              {t("myWorks")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;





















