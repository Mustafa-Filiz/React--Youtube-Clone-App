import { Box } from '@mui/system';
import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { videosSelector } from '../redux/youtubeSlice';
import { Divider } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function VideoList() {
    const videos = useSelector(videosSelector);

    return (
        <Box>
            <Stack
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
            >
                {videos &&
                    videos.items.map((video) => (
                        <Item>
                            <img
                                src={video.snippet.thumbnails.default.url}
                                alt="asd"
                            />
                            {video.snippet.title}
                        </Item>
                    ))}
            </Stack>
        </Box>
    );
}

export default VideoList;
