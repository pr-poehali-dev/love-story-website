import React from "react";
import { Card } from "@/components/ui/card";

const StorySection = () => {
  const hints = [
    {
      emoji: "🤔",
      title: "Интрига растёт...",
      text: "Что же это может быть? Что-то важное, что-то особенное... Ты уже начинаешь догадываться?",
    },
    {
      emoji: "🎁",
      title: "Подсказка номер один",
      text: "Это связано с тобой и со мной. Это то, что может изменить наши будни и добавить красок в серые дни.",
    },
    {
      emoji: "✨",
      title: "Подсказка номер два",
      text: "Помнишь, как мы мечтали о чём-то особенном? Возможно, пришло время воплотить одну из наших идей в жизнь!",
    },
    {
      emoji: "💫",
      title: "Почти разгадка...",
      text: "Это предложение, от которого сложно отказаться. Что-то, что принесёт радость и новые впечатления в нашу жизнь!",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-montserrat bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
          Загадочные подсказки 🕵️‍♀️
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {hints.map((hint, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0 animate-bounce">
                  {hint.emoji}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 font-montserrat">
                    {hint.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-opensans">
                    {hint.text}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
