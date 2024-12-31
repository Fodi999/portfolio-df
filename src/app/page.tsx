"use client";

import React from 'react';
import Image from 'next/image';
import 'boxicons/css/boxicons.min.css';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center px-4 pt-safe-top pb-safe-bottom relative">
      {/* Кнопка перевода текста */}
      <button
        className="absolute top-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-2 md:p-3 shadow-lg hover:from-purple-600 hover:to-blue-600 transition duration-300 flex items-center justify-center gap-0 md:gap-2 border-2 border-white"
        style={{ minWidth: '40px', minHeight: '40px' }}
        onClick={() => alert('Функция перевода в разработке')}
      >
        <i className="bx bx-globe text-lg md:text-xl"></i>
        <span className="hidden sm:inline">Translate</span>
      </button>
      
      <div className="w-full max-w-7xl bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          {/* Левая часть с фото */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src="/00031.jpg"
              alt="Card Image"
              width={400}
              height={400}
              priority
              className="w-full h-64 md:h-full object-cover object-top"
            />
            {/* Иконки соцсетей */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-instagram text-2xl sm:text-3xl text-white hover:text-gray-300 transition duration-300"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-facebook text-2xl sm:text-3xl text-white hover:text-gray-300 transition duration-300"></i>
              </a>
              <a href="mailto:example@gmail.com">
                <i className="bx bxl-gmail text-2xl sm:text-3xl text-white hover:text-gray-300 transition duration-300"></i>
              </a>
            </div>
          </div>
          {/* Правая часть с текстом */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center bg-gradient-to-b from-gray-100 to-gray-300">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mb-4 text-center md:text-left">
              Suhi Master
            </h2>
            <section className="py-6 md:py-10 bg-gray-100 shadow-lg hover:shadow-2xl transition transform hover:scale-105 rounded-lg overflow-hidden">
              <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4">
                  Обо мне
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-800 to-black mb-6">
                  Дима Фомин, профессиональный суши-мастер с более чем 20-летним опытом. 
                  За эти годы я превратил свое увлечение японской кухней в искусство, создавая уникальные блюда, 
                  которые радуют своим вкусом и качеством. Моя цель — дарить людям удовольствие через идеальное сочетание 
                  традиций и современных кулинарных подходов.
                </p>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-500 shadow-inner transition duration-300 flex items-center gap-2 mx-auto">
                  <i className="bx bx-briefcase text-lg sm:text-xl"></i>
                  Мои работы
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;














