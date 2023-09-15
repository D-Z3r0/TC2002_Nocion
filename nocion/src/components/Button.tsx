import React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


interface ButtonsProps {
  onClick: () => void;
}

export default function Buttons(props: ButtonsProps) {
  const {onClick} = props;

  const handleClick = () => {
    console.log('El botón fue presionado.');
    // Puedes realizar cualquier acción adicional aquí.
    props.onClick();
  };
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
        onClick={props.onClick}
      >
        Crear
      </Button>
    </Stack>
  );
}