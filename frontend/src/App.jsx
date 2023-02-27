import Home from "./pages/Home/Home"
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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Home />
        </ThemeProvider>
    )
}

export default App
