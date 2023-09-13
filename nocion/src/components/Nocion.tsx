import React, { CSSProperties, useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


  
function Nocion() {
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [count, setCount] = useState(0);

    const gridStyle: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gap: '16px',
    };

    const gridItemStyle: CSSProperties = {
        //backgroundColor: 'lightgray',
        padding: '20px',
        textAlign: 'center',
    };

    const handleField1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setField1(e.target.value);
    };

    const handleField2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setField2(e.target.value);
    };

    const handleDate1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate1(e.target.value);
    };

    const handleDate2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate2(e.target.value);
    };

    const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        setCount(isNaN(newValue) ? 0 : newValue);
    };

    return (
        <div className="Notion">
            <div style={gridStyle}>
                <div style={gridItemStyle}>
                    <input type="text" value={field1} onChange={handleField1Change} placeholder="Field 1" />
                </div>
                <div style={gridItemStyle}>
                    <input type="text" value={field2} onChange={handleField2Change} placeholder="Field 2" />
                </div>
                <div style={gridItemStyle}>
                    <input type="date" value={date1} onChange={handleDate1Change} placeholder="Date 1" />
                </div>
                <div style={gridItemStyle}>
                    <input type="date" value={date2} onChange={handleDate2Change} placeholder="Date 2" />
                </div>
                <div style={gridItemStyle}>
                    <input type="number" value={count} onChange={handleCountChange} placeholder="Counter" />
                </div>
            </div>
        </div>
    );
}

export default Nocion;