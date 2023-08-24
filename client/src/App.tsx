import { Grid } from '@mui/material';
import SignUp from './signUp/SignUp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { appGrid } from './assets/styles/style';
import SignIn from './signIn/SignIn';

/** @jsxImportSource @emotion/react */

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Grid css={appGrid}>
        <Grid>
          <SignUp></SignUp>
        </Grid>
      </Grid>
    ),
  },
  {
    path: '/sign-up',
    element: (
      <Grid css={appGrid}>
        <Grid>
          <SignUp></SignUp>
        </Grid>
      </Grid>
    ),
  },
  {
    path: '/sign-in',
    element: (
      <Grid css={appGrid}>
        <Grid>
          <SignIn></SignIn>
        </Grid>
      </Grid>
    ),
  },
]);

function App () {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
