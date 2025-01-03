import { createContext, useContext, useState } from "react"

import AccordionItem from "./AccordionItem";

const AccordionContext = createContext();

export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion-related components must be wrapped within Accordion Context');
  }
  return context;
}

export default function Accordion({children, className}) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId(prevItemId => prevItemId === id ? null : id)
  }

  const contextValue = {
    openItemId,
    toggleItem
  }

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>
        {children}
      </ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;