import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { display } from '@mui/system';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 500 }}>   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          cneiujcnejncjncicnwoenfjkwc wokf okw cofkwo
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <label>20/05/2023</label>
        <label>Tiempo: 7hrs</label>
        <Button size="small">Eliminar Tarea</Button>
      </CardActions>
    </Card>
  );
}
