import React, { CSSProperties, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MyDatePicker from './DatePicker';
import MyContador from './Contador';
import MyField from './Field';
import MediaCard from './Tarjeta';
import Buttons from './Button';
import "./Nocion.css";
import {Tarea} from '../models/Tarea';
import axios from 'axios';

function Nocion() {
    const [tituloValue, setFieldValueTitulo] = useState('');
    const [descripcionValue, setFieldValueDescripcion] = useState('');
    const [fechaCreacionValue, setFechaCreacion] = useState('');
    const [fechaEntregaValue, setFechaEntrega] = useState('');
    const [countValue, setCountValue] = useState(0);
    // const [shouldSubmit, setShouldSubmit] = useState(false);
    const [saving,setSaving]=useState(false);
    const [tareas,setTareas]=useState<Tarea[]>([]);
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

    // useEffect(() => {
    //     // if (shouldSubmit) {
    //     //     axios.post("http://localhost:8000/tarea/create", {
    //     //         titulo: tituloValue,
    //     //         descripcion: descripcionValue,
    //     //         fecha_c: fechaCreacionValue,
    //     //         fecha_e: fechaEntregaValue,
    //     //         tiempo: countValue
    //     //     }).then((response) => {
    //     //         getTareas();
    //     //         console.log(tareas);
    //     //         // Reiniciar shouldSubmit después de la solicitud
    //     //         setShouldSubmit(false);
    //     //     }).catch((error) => {
    //     //         console.error('Error al enviar la solicitud POST:', error);
    //     //     });
    //     // }
    //     getTareas();
    // },[])

    function subirTarea(){
        // setShouldSubmit(true);
        console.log('tituloValue:', tituloValue);
        console.log('descripcionValue:', descripcionValue);
        console.log('fechaCreacionValue:', fechaCreacionValue);
        console.log('fechaEntregaValue:', fechaEntregaValue);
        console.log('countValue:', countValue);
        axios.post("http://localhost:8000/tarea/create",{
            titulo: tituloValue,
            descripcion: descripcionValue,
            fecha_c: fechaCreacionValue,
            fecha_e: fechaEntregaValue,
            tiempo: countValue
        }).then((response)=>{
            setSaving(false);
            getTareas();
            console.log(tareas);
        })
    }

    function getTareas(){
        axios.get('http://localhost:8000/tarea/list').then((response)=>{
            setTareas(response.data)
        })
    }

    useEffect(()=>{
        getTareas();
    }, [])

    return (
        <div className="Notion">
            <div style={gridStyle}>
                <div>
                    <MyField onFieldChange={handleFieldChangeTitulo} labelText='Titulo'/>
                </div>
                <div>
                    <MyField onFieldChange={handleFieldChangeDescripcion} labelText='Descripcion'/>
                </div>
                <div>
                    <MyDatePicker onDateChange={handleDateChangeCreacion} fecha="Fecha de creación" />
                </div>
                <div>
                    <MyDatePicker onDateChange={handleDateChangeEntrega} fecha="Fecha de entrega" />
                </div>
                <div>
                    <MyContador onCountChange={handleCountValueChange} />
                </div>
            </div>
            <div>
                <Buttons onClick={subirTarea}></Buttons>
            </div>
            <div className='Div1'>
                <div className='Scroll' style={gridStyle}>
                    {/* <MediaCard titulo={tituloValue} descripcion={descripcionValue} fechaCreacion={fechaCreacionValue} fechaEntrega={fechaEntregaValue} tiempo={countValue}></MediaCard> */}
                    {tareas.map((tarea) => (
                    <MediaCard
                        titulo={tarea.titulo}
                        descripcion={tarea.descripcion}
                        fechaCreacion={tarea.fecha_c}
                        fechaEntrega={tarea.fecha_e}
                        tiempo={tarea.tiempo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Nocion;
