import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo o título */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          KHM
        </Typography>

        {/* Enlaces */}
        <Button color="inherit">Servicios</Button>
        <Button color="inherit">Cursos</Button>
        <Button color="inherit">Recursos</Button>

        {/* Carrito */}
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          <CartWidget/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
