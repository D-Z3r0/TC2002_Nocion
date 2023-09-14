import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <div>
      <TextField
        required
        id="outlined-required"
        label="Titulo"
        defaultValue="Hello World"
        sx={{
          '& .MuiInputLabel-root': {
            color: 'Black', // Cambia el color del texto de la etiqueta
          },
          '& .MuiOutlinedInput-root': {
            borderRadius: '40px', // Ajusta el radio del borde
            backgroundColor: 'Wheat', // Establece el fondo de color
            '& fieldset': {
              borderColor: 'Wheat', // Cambia el color del borde
            },
            '&:hover fieldset': {
              borderColor: 'Peru', // Cambia el color del borde al pasar el mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: 'Peru', // Cambia el color del borde cuando está enfocado
            },
          },
        }}
      />
    </div>
  );
}



