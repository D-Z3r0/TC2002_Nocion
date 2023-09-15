import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

interface MyContadorProps {
  onCountChange: (value: number) => void;
}

export default function MyContador(props: MyContadorProps) {
  const { onCountChange } = props;
  const [count, setCount] = useState(0);

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setCount(isNaN(newValue) ? 0 : newValue);

    // Llamar a la función prop para pasar el valor al componente Nocion
    onCountChange(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <div>
      <TextField
        type="number"
        value={count}
        onChange={handleCountChange}
        label="Horas Estimadas"
        variant="outlined"
        sx={{
          '& .MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiOutlinedInput-root': {
            borderRadius: '40px',
            backgroundColor: 'none',
            '& fieldset': {
              borderColor: 'Orange',
              borderWidth: '5px', // Ajusta el grosor del borde
            },
            '&:hover fieldset': {
              borderColor: 'Orange',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'Orange',
            },
            
          },
        }}
      />
    </div>
  );
}











