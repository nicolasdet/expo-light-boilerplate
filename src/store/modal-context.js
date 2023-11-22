import { createContext, useState } from 'react';

export const ModalContext = createContext({
  AddNewsModalVisible: false,
});

function ModalContextProvider({ children }) {
  const [AddNewsModalVisible, setAddNewsModalVisible] = useState(false);

  const value = {
    AddNewsModalVisible,
    setAddNewsModalVisible,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export default ModalContextProvider;
