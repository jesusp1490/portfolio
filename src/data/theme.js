import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2a2c2f',
        },
        secondary: {
            main: '#425562',
        },
        accent: {
            main: '#EA9215',
        },
        background: {
            default: '#2a2c2f',
        },
        text: {
            primary: '#EEEEEE',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& input:valid + fieldset': {
                        borderColor: 'white',
                    },
                    '& input:invalid + fieldset': {
                        borderColor: 'white',
                    },
                    '& input:valid:focus + fieldset': {
                        borderColor: 'accent',
                    },
                    '& label': {
                        color: 'white',
                    },
                    '& label.Mui-focused': {
                        color: 'accent',
                    },
                    '& .MuiInputBase-input': {
                        color: 'white',
                        fontSize: '1.2rem',
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
    },
});

export default theme;
