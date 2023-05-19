import { useEffect } from "react";
import ReactDOM from "react-dom";
import { useModalContext } from "@context/ModalContext";
import { CloseIcon } from "@public/assets/icons";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ children }) => {
  const { isModalOpen, closeModal } = useModalContext();

  const modalRoot = document.getElementById("modal-root");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el, modalRoot]);

  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-[60]"
          onClick={closeModal}
        >
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            className="bg-liteflix-grey w-full h-full sm:w-[730px] relative sm:h-[440px] flex items-center justify-center z-50"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="absolute top-4 right-2" onClick={closeModal}>
              <CloseIcon />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    el
  );
};

export default Modal;
