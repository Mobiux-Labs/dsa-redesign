import { createContext, useContext, useReducer, useState } from "react";

export const ThemeContext = createContext();
export const useCompactTheme = () => {
   return useContext(ThemeContext);
};

export const SessionContext = createContext();
export const useSession = () => {
   return useContext(SessionContext);
};
