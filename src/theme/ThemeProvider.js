import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat',
    },
    breakpoints: {},
});

function ThemeProviderContext({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeProviderContext;
