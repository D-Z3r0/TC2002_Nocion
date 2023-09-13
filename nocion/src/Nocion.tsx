import React, { CSSProperties } from 'react';
//import Button from '@mui/material/Button';
//import { TextField } from "@mui/material";

function Nocion() {
    const gridStyle: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gap: '16px',
    };

    const gridItemStyle: CSSProperties = {
        backgroundColor: 'lightgray',
        padding: '20px',
        textAlign: 'center',
    };

    return (
        <div className="Notion">
            <div style={gridStyle}>
                <div style={gridItemStyle}>1</div>
                <div style={gridItemStyle}>2</div>
                <div style={gridItemStyle}>3</div>
                <div style={gridItemStyle}>4</div>
                <div style={gridItemStyle}>5</div>
            </div>
        </div>
    );
}

export default Nocion;



