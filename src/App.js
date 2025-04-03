import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { blue, green } from '@mui/material/colors';
import { HashRouter as Router } from 'react-router-dom';
import ResumenFinanciero from './ResumenFinanciero';
import AgregarTransaccion from './AgregarTransaccion';
import ListaTransacciones from './ListaTransacciones';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: green,
    mode: 'light',
  },
});

function App() {
  const [transacciones, setTransacciones] = useState([]);

  const agregarTransaccion = (transaccion) => {
    setTransacciones([...transacciones, transaccion]);
  };

  const eliminarTransaccion = (id) => {
    setTransacciones(transacciones.filter(t => t.id !== id));
  };

  return (
    <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mis Finanzas
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ mb: 4 }}>
          <ResumenFinanciero transacciones={transacciones} />
        </Box>
        <Box sx={{ mb: 4 }}>
          <AgregarTransaccion onAgregarTransaccion={agregarTransaccion} />
        </Box>
        <Box>
          <ListaTransacciones
            transacciones={transacciones}
            onEliminarTransaccion={eliminarTransaccion}
          />
        </Box>
      </Container>
    </ThemeProvider>
    </Router>
  );
}

export default App;