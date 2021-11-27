import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	typography:{
		fontFamily : "Montserrat"
	}
});

export default function ThemeProviderContext({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
