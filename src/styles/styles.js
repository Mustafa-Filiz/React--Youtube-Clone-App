import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
    console.log(theme);
    return {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '2rem auto',
            width: '90%',
        },
        videoPlayer: {
            width: '45%',
            [theme.breakpoints.down('md')]: {
                width: '100%',
              },
        },
        listContainer: {
            width: '40%',
            [theme.breakpoints.down('md')]: {
                width: '100%',
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
            },
        },
    };
});
