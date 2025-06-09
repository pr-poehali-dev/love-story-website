import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LoveConfession = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-200 via-purple-200 to-orange-200 relative">
      <div className="container mx-auto px-6 text-center">
        <Card className="max-w-4xl mx-auto p-12 bg-white/95 backdrop-blur-md shadow-2xl animate-scale-in">
          <div className="text-8xl mb-8 animate-pulse">💝</div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-montserrat bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
            Признание
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 font-opensans leading-relaxed">
            <p>
              <strong>Дорогая моя,</strong>
            </p>
            <p>
              Ты превратила мой черно-белый код в радужную палитру эмоций! 🌈
            </p>
            <p>
              До встречи с тобой я думал, что{" "}
              <code className="bg-pink-100 px-2 py-1 rounded text-pink-700">
                console.log("Я тебя люблю")
              </code>{" "}
              — это просто строка в консоли.
            </p>
            <p>Но теперь я знаю: это самая важная функция в моей жизни! 💻❤️</p>
            <p className="text-2xl font-bold text-purple-600">
              Будь моей навсегда? 🥺
            </p>
          </div>

          <div className="mt-12 space-x-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-8 py-4 text-lg animate-pulse"
              onClick={() => alert("💕 ДА! МИллион раз ДА! 💕")}
            >
              💝 ДА! 💝
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-gray-600 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => alert("😢 Грустно, но я буду ждать...")}
            >
              Подумаю... 🤔
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LoveConfession;
