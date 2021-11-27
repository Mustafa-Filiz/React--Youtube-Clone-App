import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { videosSelector } from '../redux/youtubeSlice';
import { useStyles } from '../styles/styles';


function VideoPlayer() {
    const classes = useStyles();
    const videos = useSelector(videosSelector);
    const video = videos && videos.items[0];

    return (
        <Box className={classes.videoPlayer}>
            {video && (
                <Box>
                    <iframe
                        title={video.etag}
                        src={`https://youtube.com/embed/${video.id.videoId}`}
                        frameBorder="0"
                        width="100%"
                        height="400"
                    ></iframe>

                    <Paper elevation={8} className={classes.videoTitle}>
                        <Typography variant="h6">
                            {video.snippet.title}
                        </Typography>
                        <Typography variant="p">
                            {video.snippet.description}
                        </Typography>
                    </Paper>
                </Box>
            )}
        </Box>
    );
}

export default VideoPlayer;
