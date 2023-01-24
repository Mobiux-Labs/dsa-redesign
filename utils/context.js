import { createContext, useContext, useReducer, useState } from "react";

export const ThemeContext = createContext();

export const useCompactTheme = () => {
   return useContext(ThemeContext);
};
