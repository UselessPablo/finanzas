import React from 'react';
import {
    Box,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Divider,
    Chip
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function ListaTransacciones({ transacciones, onEliminarTransaccion }) {
    return (
        <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
                Historial de Transacciones
            </Typography>
            {transacciones.length === 0 ? (
                <Typography variant="body1" sx={{ p: 2 }}>
                    No hay transacciones registradas
                </Typography>
            ) : (
                <List>
                    {transacciones.map((transaccion) => (
                        <React.Fragment key={transaccion.id}>
                            <ListItem>
                                {transaccion.tipo === 'ingreso' ? (
                                    <ArrowUpwardIcon color="success" sx={{ mr: 2 }} />
                                ) : (
                                    <ArrowDownwardIcon color="error" sx={{ mr: 2 }} />
                                )}
                                <ListItemText
                                    primary={transaccion.descripcion}
                                    secondary={`${transaccion.fecha} • ${transaccion.categoria || 'Sin categoría'}`}
                                />
                                <ListItemSecondaryAction>
                                    <Chip
                                        label={`$${transaccion.monto.toLocaleString()}`}
                                        color={transaccion.tipo === 'ingreso' ? 'success' : 'error'}
                                        variant="outlined"
                                        sx={{ mr: 2 }}
                                    />
                                    <IconButton
                                        edge="end"
                                        onClick={() => onEliminarTransaccion(transaccion.id)}
                                        color="error"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            )}
        </Paper>
    );
}

export default ListaTransacciones;