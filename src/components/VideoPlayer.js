import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { videosSelector } from '../redux/youtubeSlice'

function VideoPlayer() {

	const videos = useSelector(videosSelector)
	console.log(videos)
	return (
		<Box>
			
		</Box>
	)
}

export default VideoPlayer
