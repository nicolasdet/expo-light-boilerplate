import { createContext, useState } from 'react';

export const TestContext = createContext({
  AddNewsModalVisible: false,
});

function TestContextProvider({ children }) {
  const [AddNewsModalVisible, setAddNewsModalVisible] = useState(false);

  const value = {
    test: 'hey',
  };

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
}

export default TestContextProvider;
