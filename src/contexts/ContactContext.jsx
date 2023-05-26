import React, { createContext } from "react";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  return <ContactContext.Provider>{children}</ContactContext.Provider>;
};
