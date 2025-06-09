import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LoveConfession = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-200 via-pink-200 to-yellow-200 relative">
      <div className="container mx-auto px-6 text-center">
        <Card className="max-w-4xl mx-auto p-12 bg-white/95 backdrop-blur-md shadow-2xl animate-scale-in">
          <div className="text-8xl mb-8 animate-pulse">🎊</div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-montserrat bg-gradient-to-r from-orange-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent">
            А вот и предложение! 🎉
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 font-opensans leading-relaxed">
            <p>
              <strong>Дорогой мой человек,</strong>
            </p>
            <p>Давай устроим незабываемое приключение! 🌟</p>
            <p>
              Может быть, съездим куда-нибудь на выходные? Или попробуем что-то
              новое вместе?
            </p>
            <p>
              А может, просто проведём время так, как давно хотели, но всё
              откладывали? 🤗
            </p>
            <p className="text-2xl font-bold text-orange-600">
              Что скажешь? Готов к приключениям? 😊
            </p>
          </div>

          <div className="mt-12 space-x-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-4 text-lg animate-pulse"
              onClick={() => alert("🎉 Ура! Это будет здорово! 🎉")}
            >
              🎊 Давай! 🎊
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-gray-600 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => alert("😊 Хорошо, подумаю над вариантами!")}
            >
              Расскажи подробнее 🤔
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LoveConfession;
