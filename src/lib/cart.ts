import { create } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

const CART_STORAGE_KEY = 'apple-gift-cart';

// Функции для работы с localStorage
const getStoredCart = (): CartItem[] => {
  const stored = localStorage.getItem(CART_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const storeCart = (items: CartItem[]): void => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
};

// Хук для работы с корзиной
export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Загрузка корзины при инициализации
  useEffect(() => {
    setItems(getStoredCart());
  }, []);

  // Сохранение корзины при изменении
  useEffect(() => {
    if (items.length > 0) {
      storeCart(items);
    }
  }, [items]);

  // Добавление товара в корзину
  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Удаление товара из корзины
  const removeItem = (id: string) => {
    setItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== id);
      if (newItems.length === 0) {
        localStorage.removeItem(CART_STORAGE_KEY);
      }
      return newItems;
    });
  };

  // Обновление количества товара
  const updateQuantity = (id: string, quantity: number) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Очистка корзины
  const clearCart = () => {
    localStorage.removeItem(CART_STORAGE_KEY);
    setItems([]);
  };

  // Получение общего количества товаров
  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  // Получение общей суммы
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };
};
