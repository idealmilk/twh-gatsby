import React from "react";
import { GatsbyBrowser } from "gatsby";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

import { defaultTheme } from "./src/styles/theme";
import GlobalStyles from "./src/styles/global";
import { LanguageProvider } from "./src/context/LanguageContext";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>;
};

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <>
      <LanguageProvider>
        <AnimatePresence mode="wait">
          <GlobalStyles />
          {element}
        </AnimatePresence>
      </LanguageProvider>
    </>
  );
};
