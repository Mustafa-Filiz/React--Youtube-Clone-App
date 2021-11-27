import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
    return {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '2rem auto',
            width: '90%',
            [theme.breakpoints.down(930)]: {
                flexDirection: 'column',
            },
        },
        videoPlayer: {
            width: '45%',
            [theme.breakpoints.down(930)]: {
                width: '90%',
            },
        },
        videoTitle: {
            padding: '1rem',
            marginTop: '0.5rem',
        },
        listContainer: {
            width: '40%',
            [theme.breakpoints.down(930)]: {
                width: '90%',
                marginTop: '5rem',
            },
        },
        listItem: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '1rem',
            cursor: 'pointer',
            '&:hover': {
                textDecoration: 'underline',
                backgroundColor: '#eee',
            },
        },
    };
});
