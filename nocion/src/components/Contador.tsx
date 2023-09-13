import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

export default function MyContador() {
    const [count, setCount] = useState(0);

    const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        setCount(isNaN(newValue) ? 0 : newValue);
    };

    return (
        <div>
            <TextField
                type="number"
                value={count}
                onChange={handleCountChange}
                label="Contador"
                variant="outlined"
            />
        </div>
    );
}











