import { createContext, useContext } from "react"

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
    const context = useContext(AccordionItemContext);
    if (!context) {
        throw new Error('AccordionItem-related components must be wrapped within AccordionItem Context');
    }
    return context;
}

function AccordionItem({ id, className, children }) {
  return (
    <AccordionItemContext.Provider value={id}>
        <li className={className}>
            {children}
        </li>
    </AccordionItemContext.Provider>
  );
}

export default AccordionItem;