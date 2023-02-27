import {
   createContext,
   useContext,
   useReducer,
   useState,
   useEffect,
   useMemo,
} from "react";

export const ThemeContext = createContext();
export const useCompactTheme = () => {
   return useContext(ThemeContext);
};

export const SessionContext = createContext();
export const useSession = () => {
   return useContext(SessionContext);
};

export const ModalContext = createContext();
export const useModal = () => {
   return useContext(ModalContext);
};
