import React from "react";
import { Card } from "@/components/ui/card";

const StorySection = () => {
  const storyParts = [
    {
      emoji: "👨‍💻",
      title: "Глава 1: Знакомство",
      text: "Жил-был программист по имени Макс. Каждый день он писал код, пил кофе и думал, что CSS — это его единственная любовь. Но однажды, в обычный вторник, в офис пришла новая дизайнерка Аня...",
    },
    {
      emoji: "☕",
      title: "Глава 2: Первый баг",
      text: "Макс впервые в жизни забыл поставить точку с запятой. Не потому что торопился, а потому что Аня спросила: 'А можно кнопку сделать чуть более... розовой?' И мир программиста перевернулся!",
    },
    {
      emoji: "🎨",
      title: "Глава 3: Цветовая палитра сердца",
      text: "Теперь каждый код-ревью превращался в урок искусства. 'Этот синий слишком грустный', — говорила Аня. И Макс перекрашивал не только интерфейс, но и свою жизнь в более яркие тона.",
    },
    {
      emoji: "🐛",
      title: "Глава 4: Баг в матрице",
      text: "Однажды Макс написал функцию checkLove() и она вернула true. Он проверил код три раза — ошибок не было. Видимо, это был не баг, а фича жизни! 💝",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-montserrat bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Наша История
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {storyParts.map((part, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm animate-fade-in"
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0 animate-bounce">
                  {part.emoji}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 font-montserrat">
                    {part.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-opensans">
                    {part.text}
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
