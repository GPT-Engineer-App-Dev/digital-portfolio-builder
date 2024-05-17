import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, theme as baseTheme } from "@chakra-ui/react";
import { theme as proTheme } from '@chakra-ui/pro-theme'
import '@fontsource-variable/open-sans'
import '@fontsource-variable/spline-sans'

const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
    fonts: {
      heading: "'Inter Variable', -apple-system, system-ui, sans-serif",
      body: "'Inter Variable', -apple-system, system-ui, sans-serif",
    },
  },
  proTheme,
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);