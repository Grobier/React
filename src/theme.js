
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Color principal
    },
    secondary: {
      main: '#f50057', // Color secundario
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Fuente global
  },
});

export default theme;
