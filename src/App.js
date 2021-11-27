import { Box } from '@mui/system';
import './App.css';
import Navbar from './components/Navbar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import { useStyles } from './styles/styles';

function App() {
    const classes = useStyles();
    return (
        <Box>
            <Navbar />
            <Box className={classes.container}>
                <VideoPlayer />
                <VideoList />
            </Box>
        </Box>
    );
}

export default App;
