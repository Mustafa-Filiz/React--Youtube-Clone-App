import { Box } from '@mui/system';
import './App.css';
import Navbar from './components/Navbar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

function App() {
    return (
        <Box className="App">
            <Navbar />
            <VideoPlayer />
            <VideoList />
        </Box>
    );
}

export default App;
