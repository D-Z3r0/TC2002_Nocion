import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface MyDatePickerProps2 {
    fecha: string;
    onDateChange: (value: string) => void;
}

export default function MyDatePicker(props: MyDatePickerProps2) {
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
                    color: 'white',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '40px',
                    backgroundColor: 'none',
                    '& fieldset': {
                      borderColor: 'Lime',
                      borderWidth: '5px', // Ajusta el grosor del borde
                    },
                    '&:hover fieldset': {
                      borderColor: 'Lime',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'green',
                    },
                    
                  },
                }}
            />
        </LocalizationProvider>
    );
}
