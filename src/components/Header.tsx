import { Link } from "react-router-dom";
import { AppleIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <AppleIcon className="h-8 w-8" />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Главная
          </Link>
          <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Подарочные карты
          </Link>
          <Link to="/instructions" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Инструкция
          </Link>
          <Link to="/faq" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            Корзина
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
