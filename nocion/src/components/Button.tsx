import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons() {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained" // Cambia a "contained" para darle fondo de color
        sx={{
          backgroundColor: 'Moccasin', // Establece el fondo de color
          color: 'Black', // Cambia el color del texto
          borderRadius: '20px', // Ajusta el radio del borde
          '&:hover': {
            backgroundColor: 'Moccasin', // Cambia el color de fondo al pasar el mouse
          },
        }}
      >
        Crear
      </Button>
    </Stack>
  );
}
