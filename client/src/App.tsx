import { Grid } from '@mui/material';
import SignUp from './signUp/SignUp';
import { appGrid } from './style';

/** @jsxImportSource @emotion/react */

function App () {
  return (
    <>
      <Grid css={appGrid}>
        <Grid>
          <SignUp></SignUp>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
