import { useRef } from "react";

export default function Modal({children, open, className = ''}) {

    const dialog = useRef();

    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`}>
            {children}
        </dialog>,
        document.getElementById('modal')
    );
}