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











