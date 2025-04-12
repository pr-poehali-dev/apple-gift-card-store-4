import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

const FaqPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h1>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Получите ответы на самые популярные вопросы о подарочных картах Apple.
            </p>
            
            <div className="max-w-3xl mx-auto">
              <FaqAccordion />
              
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Остались вопросы?</h3>
                <p className="text-gray-600 mb-4">
                  Если вы не нашли ответ на свой вопрос, свяжитесь с нашей службой поддержки.
                </p>
                <p className="text-gray-600">
                  Email: support@applegiftcards.ru<br />
                  Телефон: +7 (800) 123-45-67
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

export default FaqPage;
