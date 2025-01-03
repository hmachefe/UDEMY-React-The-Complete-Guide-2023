import { useAccordionContext } from './Accordion/Accordion'
import { useAccordionItemContext } from './Accordion/AccordionItem';

function AccordionTitle({ className, children }) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
        {children}
    </h3>
  )
}

export default AccordionTitle