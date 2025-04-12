import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useCartStore } from "@/lib/cart";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Имитация процесса оформления заказа
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      alert("Заказ успешно оформлен! Коды будут отправлены на вашу почту.");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">Корзина</h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">Ваша корзина пуста</h2>
              <p className="text-gray-600 mb-8">Добавьте подарочные карты Apple, чтобы продолжить покупки</p>
              <Button asChild className="rounded-full px-8">
                <Link to="/products">Перейти к подарочным картам</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-4">Товар</th>
                        <th className="text-center p-4">Количество</th>
                        <th className="text-right p-4">Цена</th>
                        <th className="p-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id} className="border-b">
                          <td className="p-4">
                            <div className="font-medium">{item.title}</div>
                          </td>
                          <td className="p-4">
                            <div className="flex justify-center">
                              <select
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                className="w-16 rounded border border-gray-300 p-1"
                              >
                                {[1, 2, 3, 4, 5].map((num) => (
                                  <option key={num} value={num}>
                                    {num}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            {item.price * item.quantity} ₽
                          </td>
                          <td className="p-4 text-right">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-5 w-5 text-gray-500" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-medium mb-4">Сумма заказа</h2>
                  
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Товары:</span>
                    <span>{getTotalPrice()} ₽</span>
                  </div>
                  
                  <div className="border-t my-4"></div>
                  
                  <div className="flex justify-between mb-6 font-medium text-lg">
                    <span>Итого:</span>
                    <span>{getTotalPrice()} ₽</span>
                  </div>
                  
                  <Button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full rounded-full"
                  >
                    {isCheckingOut ? "Оформление..." : "Оформить заказ"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
