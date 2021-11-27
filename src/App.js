import { Box } from '@mui/system';
import './App.css';
import Navbar from './components/Navbar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import { useStyles } from './styles/styles';
import ThemeProviderContext from './theme/ThemeProvider';

function App() {
    const classes = useStyles();
    return (
        <Box>
            <ThemeProviderContext>
                <Navbar />
                <Box className={classes.container}>
                    <VideoPlayer />
                    <VideoList />
                </Box>
            </ThemeProviderContext>
        </Box>
    );
}

export default App;
