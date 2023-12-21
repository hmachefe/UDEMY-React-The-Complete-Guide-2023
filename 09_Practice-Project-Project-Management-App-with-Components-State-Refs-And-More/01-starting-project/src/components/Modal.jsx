
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import {  } from 'react';

const Modal = forwardRef(function Modal({children, buttonCaptions}, ref) {

    const dialogRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialogRef.current.showModal();
            }
        }
    });


    return createPortal(
        <dialog ref={dialogRef}>
            {children}
            <form method="dialog">
                <button>{buttonCaptions}</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
});

export default Modal;