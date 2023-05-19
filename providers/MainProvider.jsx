"use client";

import { ModalProvider } from "@context/ModalContext";

const MainProvider = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default MainProvider;
