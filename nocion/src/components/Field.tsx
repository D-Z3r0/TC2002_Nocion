import * as React from 'react';
import TextField from '@mui/material/TextField';

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
    <div>
      <TextField
        required
        id="outlined-required"
        label={props.labelText}
        defaultValue="Hello World"
        onChange={handleFieldChange}
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



