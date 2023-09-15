import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons() {
  const customButtonStyles = {
    borderRadius: '2px', // Hace que el botón sea redondo
    overflow: 'hidden',
    position: 'relative',
    padding: '1.6em 2.5em',
    background: 'transparent',
    color: 'white',
    letterSpacing: '2px',
    transition: '0.2s',
    border: '6px solid Aquamarine	', // Agrega un borde gris al botón
    cursor: 'pointer',
    '&:hover': {
      background: 'transparent',
    },
  };

  const customBeforeStyles = {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '0',
    height: '0',
    borderTop: '1px solid white',
    borderRight: '1px solid white',
    borderBottom: '1px solid white',
    borderLeft: '1px solid white',
    transition: 'all 0.5s ease-in-out',
  };

  return (
    <Stack spacing={2} direction="row">
      <div className="contentBox">
        <div id="fourth" className="buttonBox">
          <Button
            variant="contained"
            sx={{
              ...customButtonStyles,
              '&::before': {
                ...customBeforeStyles,
              },
              '&:hover::before': {
                width: '100%',
                height: '100%',
              },
            }}
          >
            CREAR
          </Button>
        </div>
      </div>
    </Stack>
  );
}















