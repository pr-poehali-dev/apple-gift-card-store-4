import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { giftCards } from "@/data/gift-cards";
import GiftCardItem from "@/components/GiftCardItem";
import { useCart } from "@/lib/cart";

const HomePage = () => {
  const { addItem } = useCart();

  const handleAddToCart = (id: string) => {
    const card = giftCards.find((card) => card.id === id);
    if (card) {
      addItem({
        id: card.id,
        title: card.title,
        price: card.price,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Популярные подарочные карты</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {giftCards.map((card) => (
                <GiftCardItem
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  price={card.price}
                  imageSrc={card.imageSrc}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild className="rounded-full px-8">
                <Link to="/products">Смотреть все карты</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Преимущества Apple Gift Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full bg-blue-100 p-4 inline-flex mb-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Игры и приложения</h3>
                <p className="text-gray-600">Приобретайте игры и приложения в App Store</p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-blue-100 p-4 inline-flex mb-4">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Музыка и фильмы</h3>
                <p className="text-gray-600">Наслаждайтесь музыкой, фильмами и сериалами</p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-blue-100 p-4 inline-flex mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Сервисы Apple</h3>
                <p className="text-gray-600">Оплачивайте подписки на сервисы Apple</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
