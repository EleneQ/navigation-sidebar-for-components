import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "ddd333",
      label: "Can I use this here?",
      content: "You absolutely can okay",
    },
    {
      id: "444555",
      label: "Can I use that here?",
      content: "You absolutely can okay",
    },
    {
      id: "ggg555",
      label: "Can I use this here?",
      content: "You absolutely can okay",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
