import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRef } from 'react';

function Modal({children, open, className = ''}) {

    const dialogRef = useRef();

    useEffect(() => {
        if (open) {
            dialogRef.current.showModal();
        }
    }, [open]);

    return createPortal(
        <dialog ref={dialogRef} className={`modal ${className}`}>{children}</dialog>,
        document.getElementById('modal'));
}

export default Modal