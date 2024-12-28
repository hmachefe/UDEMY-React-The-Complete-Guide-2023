import React from 'react'

function Accordion({children, className}) {
  // this function should deal with creating a shell for the accordion
  // a wrapper for all the accordion items
  return (
    <ul className={className}>
      {children}
    </ul>
  )
}

export default Accordion