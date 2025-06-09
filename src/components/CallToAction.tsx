import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
          А как твоя история любви? 💕
        </h2>
        <p className="text-xl mb-8 opacity-90 font-opensans">
          Каждая любовь уникальна, как код без багов!
        </p>

        <Card className="inline-block p-6 bg-white/10 backdrop-blur-md border-white/20">
          <div className="text-4xl mb-4">🚀💌</div>
          <p className="text-lg mb-4">
            Создай свою историю любви вместе с Поехали!
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold"
            onClick={() =>
              window.open("https://t.me/+QgiLIa1gFRY4Y2Iy", "_blank")
            }
          >
            Присоединиться к сообществу ❤️
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
