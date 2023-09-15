import React, { CSSProperties, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MyDatePicker from './DatePicker';
import MyContador from './Contador';
import MyField from './Field';
import MediaCard from './Tarjeta';
import Buttons from './Button';
import "./Nocion.css";
import MyField2 from './Field2';
import MyDatePicker2 from './DatePicker2';

function Nocion() {
    const [tituloValue, setFieldValueTitulo] = useState('');
    const [descripcionValue, setFieldValueDescripcion] = useState('');
    const [fechaCreacionValue, setFechaCreacion] = useState('');
    const [fechaEntregaValue, setFechaEntrega] = useState('');
    const [countValue, setCountValue] = useState(0);
    const [showCard, setShowCard] = useState(false);

    const gridStyle: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gap: '16px',
    };

    const gridItemStyle: CSSProperties = {
        padding: '20px',
        textAlign: 'center',
    };


    const handleFieldChangeTitulo = (value: string) => {
        setFieldValueTitulo(value);
    };

    const handleFieldChangeDescripcion = (value: string) => {
        setFieldValueDescripcion(value);
    };

    const handleDateChangeCreacion = (date: string) => {
        setFechaCreacion(date);
    };
    
    // En MyDatePicker para fecha de entrega
    const handleDateChangeEntrega = (date: string) => {
        setFechaEntrega(date);
    };

    const handleCountValueChange = (value: number) => {
        setCountValue(value);
    };

    const handleGuardarClick = () => {
        // Acceder a los valores desde los estados
        console.log('NUEVA TARJETA CREADA');
        console.log('Titulo:', tituloValue);
        console.log('Descripcion:', descripcionValue);
        console.log('Fecha de creación:', fechaCreacionValue);
        console.log('Fecha de entrega:', fechaEntregaValue);
        console.log('Valor de MyContador:', countValue);

        // Aquí puedes realizar acciones adicionales, como enviar los valores a un servidor, etc.
    };


    return (
        <div className="Notion">
            <div style={gridStyle}>
                <div>
                    <MyField onFieldChange={handleFieldChangeTitulo} labelText='Titulo'/>
                </div>
                <div>
                    <MyField2 onFieldChange={handleFieldChangeDescripcion} labelText='Descripcion'/>
                </div>
                <div>
                    <MyDatePicker onDateChange={handleDateChangeCreacion} fecha="Fecha de creación" />
                </div>
                <div>
                    <MyDatePicker2 onDateChange={handleDateChangeEntrega} fecha="Fecha de entrega" />
                </div>
                <div>
                    <MyContador onCountChange={handleCountValueChange} />
                </div>
            </div>
            <div>
                <Buttons></Buttons>
            </div>
            <div className='Div1'>
                <div className='Scroll'>
                    <MediaCard titulo={tituloValue} descripcion={descripcionValue} fechaCreacion={fechaCreacionValue} fechaEntrega={fechaEntregaValue} tiempo={countValue} />
                </div>
            </div>
        </div>
    );
}

export default Nocion;



