import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


interface MediaCardProps {
  titulo:string;
  descripcion:string;
  fechaCreacion:string;
  fechaEntrega:string;
  tiempo:number;
}

function calcularPrioridad(props: MediaCardProps){
  const fechaCreacion = new Date(props.fechaCreacion);
  const fechaEntrega = new Date(props.fechaEntrega);
  const tiempoEstimado = props.tiempo;

  // Calcular la diferencia en milisegundos entre la fecha de entrega y la fecha actual
  const diferenciaMilisegundos = fechaEntrega.getTime() - fechaCreacion.getTime();

  // Convertir la diferencia en días
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

  // Calcular el puntaje total de prioridad
  const puntajeTotal = puntajeFechaEntrega + puntajeTiempoEstimado;

  // Definir categorías de prioridad basadas en el puntaje total
  if (puntajeTotal >= 5) {
    return "PRIORIDAD ALTA";
  } else if (puntajeTotal > 3) {
    return "PRIORIDAD MEDIA";
  } else {
    return "PRIORIDAD BAJA";
  }
}

export default function MediaCard(props: MediaCardProps) {

  const prioridad = calcularPrioridad(props);

  let labelStyle: React.CSSProperties = {};
  if (prioridad === "PRIORIDAD ALTA") {
    labelStyle.backgroundColor = '#F27F77';
  } else if (prioridad === "PRIORIDAD MEDIA") {
    labelStyle.backgroundColor = '#f5eb88';
  } else if (prioridad === "PRIORIDAD BAJA") {
    labelStyle.backgroundColor = '#46f7b7';
  }

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left' }}>
            {props.titulo}
          </Typography>
          <label style={labelStyle}>
            {prioridad}
          </label>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
          {props.descripcion}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <div>
          <label>{props.fechaEntrega}</label>
          <label style={{ marginLeft: '15px' }}>Tiempo: {props.tiempo}hrs</label>
        </div>
        <Button size="small">Eliminar Tarea</Button>
      </CardActions>
    </Card>
  );
}