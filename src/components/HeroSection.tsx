import React from "react";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-orange-100 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-32 right-24 w-24 h-24 bg-purple-200 rounded-full opacity-40 animate-bounce"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-bold text-6xl md:text-8xl bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent mb-6 font-montserrat">
            История одной любви
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-opensans">
            Смешная, трогательная и совершенно правдивая история о том, как
            программист влюбился в код... и не только 💻💕
          </p>
        </div>

        <Card className="inline-block p-6 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="text-4xl mb-4">🚀❤️</div>
          <p className="text-lg text-gray-600 font-opensans">
            Приготовьтесь к взлёту эмоций!
          </p>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
