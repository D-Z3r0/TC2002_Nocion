import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface MyFieldProps {
  labelText:string;
  onFieldChange: (value: string) => void;
}

export default function MyField(props: MyFieldProps) {
  const { onFieldChange } = props;

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onFieldChange(newValue); // Llamar a la función prop para pasar el valor al componente Nocion
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={props.labelText}
        variant="outlined"
        onChange={handleFieldChange} // Agregar un controlador de eventos para detectar cambios
      />
    </Box>
  );
}
