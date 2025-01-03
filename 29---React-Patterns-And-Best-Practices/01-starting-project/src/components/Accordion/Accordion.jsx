import { createContext, useContext, useState } from "react"

const AccordionContext = createContext();

export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    return new Error('Accordion-related components must be wrapped within Accordion Context');
  }
  return context;
}

export default function Accordion({children, className}) {
  const [openItemId, setOpenItemId] = useState();

  function openItem(id) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }

  const contextValue = {
    openItemId,
    openItem,
    closeItem
  }

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>
        {children}
      </ul>
    </AccordionContext.Provider>
  );
}
