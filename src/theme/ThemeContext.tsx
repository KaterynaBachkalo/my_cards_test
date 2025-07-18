import { createContext } from "react";
import type { IContextTheme } from "../types/type";

export const ThemeContext = createContext<IContextTheme | undefined>(undefined);
