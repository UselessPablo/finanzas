import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Paper,
    Typography,
    Grid
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

function AgregarTransaccion({ onAgregarTransaccion }) {
    const [descripcion, setDescripcion] = useState('');
    const [monto, setMonto] = useState('');
    const [tipo, setTipo] = useState('ingreso');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!descripcion || !monto) return;

        const nuevaTransaccion = {
            id: uuidv4(),
            descripcion,
            monto: parseFloat(monto),
            tipo,
            categoria,
            fecha: new Date().toISOString().split('T')[0],
        };

        onAgregarTransaccion(nuevaTransaccion);

        // Reset form
        setDescripcion('');
        setMonto('');
        setCategoria('');
    };

    return (
        <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
                Agregar Transacción
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Descripción"
                            variant="outlined"
                            fullWidth
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Monto"
                            variant="outlined"
                            type="number"
                            fullWidth
                            value={monto}
                            onChange={(e) => setMonto(e.target.value)}
                            inputProps={{ step: "0.01" }}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Tipo</InputLabel>
                            <Select
                                value={tipo}
                                label="Tipo"
                                onChange={(e) => setTipo(e.target.value)}
                            >
                                <MenuItem value="ingreso">Ingreso</MenuItem>
                                <MenuItem value="gasto">Gasto</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Categoría"
                            variant="outlined"
                            fullWidth
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                        >
                            Agregar Transacción
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
}

export default AgregarTransaccion;