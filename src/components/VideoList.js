import { Box } from '@mui/system';
import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { videosSelector } from '../redux/youtubeSlice';
import { Divider } from '@mui/material';
import { useStyles } from '../styles/styles';



function VideoList() {
    const classes = useStyles()
    const videos = useSelector(videosSelector);

    return (
        <Box className={classes.listContainer}>
            <Stack
                spacing={2}
                divider={<Divider orientation="horizontal" flexItem />}
            >
                {videos &&
                    videos.items.map((video) => (
                        <Paper className={classes.listItem}>
                            <img
                                src={video.snippet.thumbnails.default.url}
                                alt="asd"
                            />
                            {video.snippet.title}
                        </Paper>
                    ))}
            </Stack>
        </Box>
    );
}

export default VideoList;
