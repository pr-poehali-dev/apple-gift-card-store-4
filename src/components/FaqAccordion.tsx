import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAccordion = () => {
  const faqItems = [
    {
      question: "Как активировать карту Apple Gift?",
      answer: "Для активации карты Apple Gift перейдите в App Store или iTunes Store, войдите в свою учетную запись Apple ID, перейдите в раздел «Подарочные карты и коды» и введите код, указанный на вашей карте.",
    },
    {
      question: "Какой срок действия у карты?",
      answer: "Подарочные карты Apple Gift не имеют срока действия и могут быть использованы в любое время после приобретения.",
    },
    {
      question: "Что можно купить с помощью Apple Gift карты?",
      answer: "С помощью подарочной карты Apple Gift вы можете приобретать приложения, игры, музыку, фильмы, книги, подписки Apple Music, Apple TV+, Apple Arcade, iCloud+ и многое другое в App Store, iTunes Store, Apple Books и на других сервисах Apple.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-lg font-medium">{item.question}</AccordionTrigger>
          <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
