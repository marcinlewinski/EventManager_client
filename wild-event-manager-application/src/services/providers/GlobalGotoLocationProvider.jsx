import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export const GlobalStateProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const setGlobalLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <GlobalStateContext.Provider value={{ selectedLocation, setGlobalLocation }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
