import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-24 px-4 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        Подарочные карты Apple
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-8">
        Идеальный подарок для тех, кто ценит технологии и инновации.
        Выберите номинал и порадуйте близких.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6">
          <Link to="/products">Выбрать карту</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full px-8 py-6">
          <Link to="/instructions">Узнать больше</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
