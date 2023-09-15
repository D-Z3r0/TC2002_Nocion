import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./Tarjeta.css";


interface MediaCardProps {
  id:number;
  titulo:string;
  descripcion:string;
  fechaCreacion:string;
  fechaEntrega:string;
  tiempo:number;
  prioridad:string;
  onDelete: (id: number) => void;
}



export default function MediaCard(props: MediaCardProps) {

  const eliminarTarea = () => {
    // Llama a alguna función o acción con el id
    return props.id;
  };

  let labelStyle: React.CSSProperties = {};
  if (props.prioridad === "PRIORIDAD ALTA") {
    labelStyle.background = 'linear-gradient(45deg, #b82151, #ff5e93)';
    labelStyle.color = 'white';
  } else if (props.prioridad === "PRIORIDAD MEDIA") {
    labelStyle.background = 'linear-gradient(45deg, #f5eb88, #ffd836)';
  } else if (props.prioridad === "PRIORIDAD BAJA") {
    labelStyle.background = 'linear-gradient(45deg, #46f7b7, #6df7ff)';
  }

  return (
    <div className="card-container">
      <Card className="profile-card" style={{ backgroundColor: 'FloralWhite' }}>
      <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
          {props.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
          {props.descripcion}
        </Typography>
        <label style={labelStyle}>
          {props.prioridad}
        </label>
        <div className="profile-delivery">
          <label>Fecha de Entrega:</label>
          <label>{props.fechaEntrega}</label>
        </div>
        <div className="profile-tiempo">
          <label>Tiempo: {props.tiempo} hrs</label>
        </div>
        <div className="profile-button">
          <Button size="small" onClick={() => props.onDelete(props.id)}>Eliminar Tarea</Button>
        </div>
      </Card>
    </div>
  );
}

