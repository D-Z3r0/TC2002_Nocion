import React, { CSSProperties, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MyDatePicker from './DatePicker';
import MyContador from './Contador';
import MyField from './Field';
import MediaCard from './Tarjeta';
import "./Nocion.css";

function Nocion() {
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [count, setCount] = useState(0);

    const gridStyle: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gap: '16px',
    };

    const gridItemStyle: CSSProperties = {
        padding: '20px',
        textAlign: 'center',
    };

    const handleField1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setField1(e.target.value);
    };

    const handleField2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setField2(e.target.value);
    };

    const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        setCount(isNaN(newValue) ? 0 : newValue);
    };

    return (
        <div className="Notion">
            <div style={gridStyle}>
                <div>
                    <MyField />
                </div>
                <div style={gridItemStyle}></div>
                <div>
                    <MyDatePicker fecha="fecha de creación" />
                </div>
                <div style={gridItemStyle}></div>
                <div>
                    <MyDatePicker fecha="fecha de entrega" />
                </div>
                <div style={gridItemStyle}></div>
                <div>
                    <MyContador />
                </div>
                <div style={gridItemStyle}></div>
            </div>

            <div className='Div1'>
                <div>
                    <MediaCard />
                </div>
                <div style={gridItemStyle}></div>

            </div>
        </div>
    );
}

export default Nocion;