import { Box } from '@mui/system';
import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideosAsync, videosSelector } from '../redux/youtubeSlice';
import { Divider, Typography } from '@mui/material';
import { useStyles } from '../styles/styles';

function VideoList() {
    const classes = useStyles();
    const videos = useSelector(videosSelector);
    const dispatch = useDispatch();

    return (
        <Box className={classes.listContainer}>
            <Stack
                spacing={2}
                divider={<Divider orientation="horizontal" flexItem />}
            >
                {videos &&
                    videos.items.map((video) => (
                        <Paper
                            className={classes.listItem}
                            key={video.etag}
                            elevation={8}
                            onClick={() => {
                                dispatch(fetchVideosAsync(video.snippet.title));
                            }}
                        >
                            <img
                                src={video.snippet.thumbnails.default.url}
                                alt="asd"
                            />
                            <Typography sx={{ marginLeft: '1rem' }}>
                                {video.snippet.title}
                            </Typography>
                        </Paper>
                    ))}
            </Stack>
        </Box>
    );
}

export default VideoList;
