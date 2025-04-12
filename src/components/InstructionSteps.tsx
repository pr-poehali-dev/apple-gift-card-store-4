import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Gift, ShoppingCart } from "lucide-react";

const InstructionSteps = () => {
  const steps = [
    {
      icon: <ShoppingCart className="h-10 w-10 text-blue-500" />,
      title: "Выберите подарочную карту",
      description: "Выберите номинал подарочной карты Apple Gift, который подходит вам или получателю подарка.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-blue-500" />,
      title: "Оплатите покупку",
      description: "Оплатите карту удобным способом. Мы принимаем банковские карты, электронные платежи и другие способы оплаты.",
    },
    {
      icon: <Gift className="h-10 w-10 text-blue-500" />,
      title: "Получите код карты",
      description: "После подтверждения оплаты вы получите код активации карты по email или в личном кабинете.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step, index) => (
        <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-medium mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default InstructionSteps;
