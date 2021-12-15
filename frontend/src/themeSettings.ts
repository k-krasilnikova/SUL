import {createTheme} from "@mui/material";

const primaryColor = '#d83938'
const secondaryColor = '#ffffff'

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor
        },
        secondary: {
            main: secondaryColor
        },
        text: {
            primary: '#464646',
            secondary: '#808080',
        }
    }
})

export default theme