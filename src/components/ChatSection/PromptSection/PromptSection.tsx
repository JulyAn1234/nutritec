import { Grid, TextField } from "@mui/material";
import styles from './PromptSection.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function PromptSection() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#111111', // Change primary color
            },
            secondary: {
                main: '#111111', // Change secondary color
            },
        },
    });

    return (
        <div style={{margin:"20px 0px 10px 0px", width:"100%"}}>
            <ThemeProvider theme={theme}>
                <TextField
                    className={styles.CustomTextInput}
                    label="Enter your message here"
                    variant="outlined"
                    placeholder="Enter your message here"
                />
            </ThemeProvider>
        </div>


    );
}

export default PromptSection