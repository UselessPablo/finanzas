import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

function ResumenFinanciero({ transacciones }) {
    const ingresos = transacciones
        .filter(t => t.tipo === 'ingreso')
        .reduce((sum, t) => sum + t.monto, 0);

    const gastos = transacciones
        .filter(t => t.tipo === 'gasto')
        .reduce((sum, t) => sum + t.monto, 0);

    const balance = ingresos - gastos;

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Resumen Financiero
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Box textAlign="center">
                            <Typography variant="h6">Ingresos</Typography>
                            <Typography variant="h5" color="success.main">
                                ${ingresos.toLocaleString()}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box textAlign="center">
                            <Typography variant="h6">Gastos</Typography>
                            <Typography variant="h5" color="error.main">
                                ${gastos.toLocaleString()}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box textAlign="center">
                            <Typography variant="h6">Balance</Typography>
                            <Typography
                                variant="h5"
                                color={balance >= 0 ? "success.main" : "error.main"}
                            >
                                ${balance.toLocaleString()}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default ResumenFinanciero;