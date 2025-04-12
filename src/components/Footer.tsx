import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Магазин</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-xs text-gray-600 hover:text-black transition-colors">
                  Подарочные карты
                </Link>
              </li>
              <li>
                <Link to="/instructions" className="text-xs text-gray-600 hover:text-black transition-colors">
                  Инструкция
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-xs text-gray-600 hover:text-black transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-xs text-gray-600 hover:text-black transition-colors">
                  Связаться с нами
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-xs text-gray-600 hover:text-black transition-colors">
                  Политика возврата
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-xs text-gray-600 hover:text-black transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-xs text-gray-600 hover:text-black transition-colors">
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Apple Gift Cards Store. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
