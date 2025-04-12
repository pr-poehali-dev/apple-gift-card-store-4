import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export type GiftCardItemProps = {
  id: string;
  title: string;
  price: number;
  imageSrc: string;
  onAddToCart: (id: string) => void;
};

const GiftCardItem = ({ id, title, price, imageSrc, onAddToCart }: GiftCardItemProps) => {
  return (
    <Card className="overflow-hidden rounded-xl border-0 shadow-sm transition-all hover:shadow-md">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full bg-gray-50">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-contain p-6"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
        <p className="mt-2 text-2xl font-semibold">{price} ₽</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={() => onAddToCart(id)} 
          className="w-full rounded-full bg-blue-500 hover:bg-blue-600"
        >
          Добавить в корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GiftCardItem;
