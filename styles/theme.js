import { extendTheme } from '@chakra-ui/react';

const fallbackFont = `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;

const theme = extendTheme({
  fonts: {
    heading: `'Inter', ${fallbackFont}`,
    body: `'Inter', ${fallbackFont}`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
});

export default theme;
