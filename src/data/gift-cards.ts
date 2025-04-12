export type GiftCard = {
  id: string;
  title: string;
  price: number;
  imageSrc: string;
  description: string;
};

export const giftCards: GiftCard[] = [
  {
    id: "1000-rub",
    title: "Apple Gift Card 1000 ₽",
    price: 1000,
    imageSrc: "/placeholder.svg",
    description: "Подарочная карта Apple номиналом 1000 рублей. Отличный подарок для близких и друзей.",
  },
  {
    id: "2500-rub",
    title: "Apple Gift Card 2500 ₽",
    price: 2500,
    imageSrc: "/placeholder.svg",
    description: "Подарочная карта Apple номиналом 2500 рублей. Отличный выбор для любителей игр и приложений.",
  },
  {
    id: "5000-rub",
    title: "Apple Gift Card 5000 ₽",
    price: 5000,
    imageSrc: "/placeholder.svg",
    description: "Подарочная карта Apple номиналом 5000 рублей. Идеальный подарок для фанатов Apple.",
  },
];
