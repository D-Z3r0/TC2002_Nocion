import * as React from 'react';
import TextField from '@mui/material/TextField';
import { fontWeight } from '@mui/system';

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
  defaultValue="Materias"
  onChange={handleFieldChange}
  sx={{
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '40px',
      backgroundColor: 'none',
      '& fieldset': {
        borderColor: 'BlueViolet',
        borderWidth: '6px', // Ajusta el grosor del borde
      },
      '&:hover fieldset': {
        borderColor: 'BlueViolet',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'BlueViolet',
      },
      
    },
  }}
/>
    </div>
  );
}



