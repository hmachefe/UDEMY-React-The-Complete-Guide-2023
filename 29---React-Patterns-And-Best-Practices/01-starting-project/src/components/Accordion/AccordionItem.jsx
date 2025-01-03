import React from 'react'

function AccordionItem({ className, children }) {
  return (
    <li className={className}>
        {children}
    </li>
  )
}

export default AccordionItem