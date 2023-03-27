import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/styles";

type WithThemeProviderProps = {
	children: ReactNode;
};

export const WithThemeProvider = ({ children }: WithThemeProviderProps) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
