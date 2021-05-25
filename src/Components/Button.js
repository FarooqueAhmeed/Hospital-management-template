import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

 
  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('APPOINTMENT FiXED !', { variant });
  };

  return (
    <React.Fragment>
     
      <Button variant="contained" style={{color:'white' ,backgroundColor:'#71C61D'}} onClick={handleClickVariant('success')}>
      FiX APPOINTMENT
      </Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
