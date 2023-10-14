import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import '@fontsource/outfit/300.css'
import '@fontsource/outfit/400.css'
import '@fontsource/outfit/500.css'
import '@fontsource/outfit/700.css'

import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'


const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#00000",
    },
    
  },
});

import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from 'notistack';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3}
          autoHideDuration={3000}
        >
        <CssBaseline />

        <App />

        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>

  </React.StrictMode>,
)
