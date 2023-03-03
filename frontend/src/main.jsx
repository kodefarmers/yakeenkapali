import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes'
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: [
            'Kanit',
        ].join(','),
    },
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router}>
            </RouterProvider>
        </ThemeProvider>
    </React.StrictMode>,
)
