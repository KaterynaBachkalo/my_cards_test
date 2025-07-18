import { createContext } from "react";
import type { IContextTheme } from "../common/types";

export const ThemeContext = createContext<IContextTheme | undefined>(undefined);
