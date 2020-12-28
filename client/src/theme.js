import { useContext } from 'react'
import {DarkMode } from './context';
export const lightTheme = {
  background: "#f9f9f9",
  text: "#222222",
  main: "#99992B",
  dark: "#808000",
  bright: "#D6D681",
};
export const darkTheme = {
  background: "#222222",
  text: "#f9f9f9",
  main: "#99992B",
  dark: "#808000",
  bright: "#D6D681",
};

export const Theme = () => {
  // const gDarkMode = useContext(DarkMode);
  return true ? darkTheme : lightTheme };