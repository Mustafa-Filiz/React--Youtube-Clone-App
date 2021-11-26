import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchVideosAsync = createAsyncThunk(
    'get/getVideosAsync',
    async (queryTerm) => {
        const res = await axios.get(
            `${process.env.REACT_APP_YOUTUBE_BASE_URL}`,
            {
                params: {
                    part: 'snippet',
                    type: 'video',
                    maxResults: 5,
                    key: process.env.REACT_APP_YOUTUBE_API_KEY,
                    q: queryTerm,
                },
            }
        );
        return res.data;
    }
);

export const youtubeSlice = createSlice({
    name: 'youtube',
    initialState: {
        videos: null,
        isLoading: false,
        error: '',
    },
    reducers: {},
    extraReducers: {
        [fetchVideosAsync.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchVideosAsync.fulfilled]: (state, action) => {
            state.videos = action.payload;
            state.isLoading = false;
        },
        [fetchVideosAsync.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
    },
});


export const videosSelector = state => state.youtube.videos
export const loadingSelector = state => state.youtube.isLoading
export const errorSelector = state => state.youtube.error

export default youtubeSlice.reducer;
