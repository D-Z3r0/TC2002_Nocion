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
import MyField2 from './Field2';
import MyDatePicker2 from './DatePicker2';
import {Tarea} from '../models/Tarea';
import axios from 'axios';
import calcularPrioridad from './Tarjeta';
import MediaCardProps from './Tarjeta';
import { TransformStream } from 'node:stream/web';

function Nocion() {
    // const [idTarjeta]
    const [tituloValue, setFieldValueTitulo] = useState('');
    const [descripcionValue, setFieldValueDescripcion] = useState('');
    const [fechaCreacionValue, setFechaCreacion] = useState('');
    const [fechaEntregaValue, setFechaEntrega] = useState('');
    const [countValue, setCountValue] = useState(0);
    const [showCard, setShowCard] = useState(false);
    // const [shouldSubmit, setShouldSubmit] = useState(false);
    const [saving,setSaving]=useState(false);
    const [tareas,setTareas]=useState<Tarea[]>([]);

    let tareasSort:Tarea[];
    let id: number | undefined = undefined;

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
        console.log('NUEVA TARJETA CREADA');
        console.log('Titulo:', tituloValue);
        console.log('Descripcion:', descripcionValue);
        console.log('Fecha de creación:', fechaCreacionValue);
        console.log('Fecha de entrega:', fechaEntregaValue);
        console.log('Valor de MyContador:', countValue);
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

    function postTarea(){
        id = 123;
        // setShouldSubmit(true);
        // console.log('tituloValue:', tituloValue);
        // console.log('descripcionValue:', descripcionValue);
        // console.log('fechaCreacionValue:', fechaCreacionValue);
        // console.log('fechaEntregaValue:', fechaEntregaValue);
        // console.log('countValue:', countValue);
        axios.post("http://localhost:8000/tarea/create",{
            id: id,
            titulo: tituloValue,
            descripcion: descripcionValue,
            fecha_c: fechaCreacionValue,
            fecha_e: fechaEntregaValue,
            tiempo: countValue
        }).then((response)=>{
            setSaving(false);
            getTareas()
            console.log(tareas)
            // const resp=await getTareas();
            // console.log(resp);
        })
    }

    function calcularPrioridad(tarea:Tarea){
        const fechaCreacion = new Date(tarea.fecha_c);
        const fechaEntrega = new Date(tarea.fecha_e);
        const tiempoEstimado = tarea.tiempo;
        const diferenciaMilisegundos = fechaEntrega.getTime() - fechaCreacion.getTime();
      
        const diferenciaDias = diferenciaMilisegundos / (1000 * 60 * 60 * 24);
      
        // Asignar puntajes en función de la proximidad de la fecha de entrega
        let puntajeFechaEntrega = 0;
        if (diferenciaDias <= 5) {
          puntajeFechaEntrega = 3;
        } else if (diferenciaDias <= 10) {
          puntajeFechaEntrega = 2;
        } else if (diferenciaDias >= 14) {
          puntajeFechaEntrega = 1;
        }
      
        // Asignar puntajes en función del tiempo estimado
        let puntajeTiempoEstimado = 0;
        if (tiempoEstimado >=8) {
          puntajeTiempoEstimado = 3;
        } else if (tiempoEstimado >=2 && tiempoEstimado <=8) {
          puntajeTiempoEstimado = 2;
        } else {
          puntajeTiempoEstimado = 1;
        }
      
        const puntajeTotal = puntajeFechaEntrega + puntajeTiempoEstimado;
    
        if (puntajeTotal >= 5) {
          return "PRIORIDAD ALTA";
        } else if (puntajeTotal > 3) {
          return "PRIORIDAD MEDIA";
        } else {
          return "PRIORIDAD BAJA";
        }
      }

    async function getTareas() {
        const response = await axios.get('http://localhost:8000/tarea/list');
        const tareasOriginales = response.data.slice();
        const tareasOrdenadas = tareasOriginales.sort((a: Tarea, b: Tarea) => {
            const prioridadA = calcularPrioridad(a);
            const prioridadB = calcularPrioridad(b);
    
        if (prioridadA === 'PRIORIDAD ALTA' && prioridadB !== 'PRIORIDAD ALTA') return -1;
        if (prioridadA === 'PRIORIDAD MEDIA' && prioridadB === 'PRIORIDAD BAJA') return -1;
        return 1;
        });

        setTareas(tareasOrdenadas);
    }
    
    function deleteTarea(id:number) {
        axios.delete(`http://localhost:8000/tarea/delete/${id}`)
          .then((response) => {
            if (response.status === 200) {
              getTareas();
              console.log(tareas);
            } else {
              console.error('Error al eliminar la tarea.');
            }
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
                <Buttons onClick={postTarea}></Buttons>
            </div>
            <div className='Div1'>
                <div className='Scroll' style={gridStyle}>
                    {/* <MediaCard titulo={tituloValue} descripcion={descripcionValue} fechaCreacion={fechaCreacionValue} fechaEntrega={fechaEntregaValue} tiempo={countValue}></MediaCard> */}
                    {tareas.map((tarea) => (
                    <MediaCard
                        id={tarea.id}
                        titulo={tarea.titulo}
                        descripcion={tarea.descripcion}
                        fechaCreacion={tarea.fecha_c}
                        fechaEntrega={tarea.fecha_e}
                        tiempo={tarea.tiempo}
                        prioridad={calcularPrioridad(tarea)}
                        onDelete={()=>deleteTarea(tarea.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Nocion;



