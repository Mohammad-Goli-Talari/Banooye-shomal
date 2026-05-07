// src/theme/mui-theme.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  typography: { fontFamily: 'Vazirmatn, Roboto, sans-serif' },
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#ef6c00' },
  },
});

export default theme;
