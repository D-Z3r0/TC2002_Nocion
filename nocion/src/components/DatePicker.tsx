import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface MyDatePickerProps {
    fecha: string;
}

export default function MyDatePicker(props: MyDatePickerProps) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={props.fecha}
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
        </LocalizationProvider>
    );
}

