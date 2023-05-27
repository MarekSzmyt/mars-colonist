import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <GlobalContext.Provider value={{
      state,
      setState
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;
