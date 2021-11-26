import { Box } from '@mui/system';
import './App.css';
import Navbar from './components/Navbar'
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <Box className="App">
      <Navbar />
      <VideoPlayer />
    </Box>
  );
}

export default App;
