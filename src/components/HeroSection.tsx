import React from "react";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-40 animate-bounce"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Изображение обезьянки */}
          <div className="mb-8">
            <img
              src="https://cdn.poehali.dev/files/401f3df7-3f3e-4d79-9d85-9797f9c8057e.jpeg"
              alt="Милая обезьянка"
              className="w-64 h-64 mx-auto rounded-full shadow-2xl object-cover animate-scale-in"
            />
          </div>

          <h1 className="font-bold text-4xl md:text-6xl bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-8 font-montserrat leading-tight">
            Приветус! 👋
          </h1>

          <Card className="max-w-3xl mx-auto p-8 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-opensans">
              Не злись на меня, просто хочется кое-что предложить, а об этом ты
              узнаешь чуть ниже... 😊
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
