import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface MyDatePickerProps {
    fecha: string;
    onDateChange: (value: string) => void;
}

export default function MyDatePicker(props: MyDatePickerProps) {
    const { fecha, onDateChange } = props;

    const handleDateChange = (date: Date | null) => {
        if (date !== null) {
            // Formatear la fecha como string antes de pasarla al componente Nocion
            const formattedDate = date.toISOString().split('T')[0];
            onDateChange(formattedDate);
        } else {
            onDateChange(''); // Manejar el caso de fecha nula (si es necesario)
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={fecha}
                onChange={handleDateChange}
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

