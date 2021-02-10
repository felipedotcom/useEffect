import React, { useState, useEffect } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

function App() {

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(checked ? "Estou marcado" : "Me desmarcaram");
  }, [checked]);

  return (
    <>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ transform: "scale(4)", minHeight: '100vh' }}
      >
        <Checkbox
          checked={checked}
          onChange={() => setChecked(checked => !checked)}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        {checked ? "marcado" : "desmarcado"}
      </Grid>
    </>
  );
  
}
export default App;
