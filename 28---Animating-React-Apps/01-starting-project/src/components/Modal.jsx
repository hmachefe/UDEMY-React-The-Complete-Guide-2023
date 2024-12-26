import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        animate = {{opacity: 1, y: 30}}
        initial = {{opacity: 0, y: 0}}
        open 
        className="modal">
          <h2>{title}</h2>
          {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
