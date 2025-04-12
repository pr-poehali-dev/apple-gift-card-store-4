import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { giftCards } from "@/data/gift-cards";
import GiftCardItem from "@/components/GiftCardItem";
import { useCart } from "@/lib/cart";

const ProductsPage = () => {
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
        <section className="py-16">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Подарочные карты Apple</h1>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Выберите подарочную карту Apple необходимого номинала. Карты можно использовать для покупки приложений, игр, музыки, фильмов и подписок.
            </p>
            
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
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">Что можно купить с помощью Apple Gift Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">🎮 Игры и приложения</h3>
                <p className="text-gray-600">
                  Приобретайте игры и приложения в App Store для iPhone, iPad и Mac.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">🎵 Музыка и фильмы</h3>
                <p className="text-gray-600">
                  Наслаждайтесь любимой музыкой в Apple Music, смотрите фильмы и сериалы в Apple TV.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">📚 Книги</h3>
                <p className="text-gray-600">
                  Читайте книги и журналы в Apple Books.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">☁️ Подписки</h3>
                <p className="text-gray-600">
                  Оплачивайте подписки Apple Music, Apple TV+, Apple Arcade, iCloud+ и другие сервисы.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
