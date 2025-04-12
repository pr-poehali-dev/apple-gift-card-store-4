import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstructionSteps from "@/components/InstructionSteps";

const InstructionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Как использовать Apple Gift Cards</h1>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Следуйте этим простым шагам, чтобы приобрести и активировать подарочную карту Apple.
            </p>
            
            <InstructionSteps />
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Инструкция по активации</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium mb-4">На iPhone или iPad</h3>
                <ol className="list-decimal pl-6 space-y-4">
                  <li className="text-gray-600">
                    Откройте App Store и нажмите на свой профиль в правом верхнем углу.
                  </li>
                  <li className="text-gray-600">
                    Нажмите на «Пополнить счет или использовать подарочную карту».
                  </li>
                  <li className="text-gray-600">
                    Введите или отсканируйте код с вашей подарочной карты.
                  </li>
                  <li className="text-gray-600">
                    Нажмите «Погасить».
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">На Mac</h3>
                <ol className="list-decimal pl-6 space-y-4">
                  <li className="text-gray-600">
                    Откройте App Store.
                  </li>
                  <li className="text-gray-600">
                    Нажмите на свое имя в нижней части боковой панели.
                  </li>
                  <li className="text-gray-600">
                    Нажмите «Погасить подарочную карту».
                  </li>
                  <li className="text-gray-600">
                    Введите код с вашей подарочной карты и нажмите «Погасить».
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InstructionsPage;
