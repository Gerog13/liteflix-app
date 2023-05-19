"use client"
import { useModalContext } from "@context/ModalContext";
import { CloseIcon } from "@public/assets/icons";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ children }) => {
  const { isModalOpen, closeModal } = useModalContext();
  if (!isModalOpen) return null;

  return (
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
    </AnimatePresence>
  );
};

export default Modal;
