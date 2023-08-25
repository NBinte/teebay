import { Grid } from '@mui/material';
import SignUp from './signUp/SignUp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { appGrid } from './assets/styles/style';
import SignIn from './signIn/SignIn';
import AddProduct from './addProduct/AddProduct';
import AddTitle from './addTitle/AddTitle';
import AddCategory from './addCategory/AddCategory';
import AddDescription from './addDescription/AddDescription';
import AddPrice from './addPrice/AddPrice';
import ProductSummary from './productSummary/ProductSummary';
import { useContext, useState } from 'react';
import { createContext } from 'react';

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
  {
    path: '/add-product',
    element: (
      <Grid css={appGrid}>
        <Grid>
          <AddProduct></AddProduct>
        </Grid>
      </Grid>
    ),
  },
  {
    path: '/add-title',
    element: (
      <Grid css={appGrid}>
        <Grid>
          <AddTitle></AddTitle>
        </Grid>
      </Grid>
    ),
  },
  {
    path: '/add-category',
    element: (
      <Grid css={appGrid}>
        <Grid>
          <AddCategory></AddCategory>
        </Grid>
      </Grid>
    ),
  },
  {
    path: '/add-description',
    element: (
      <Grid css={appGrid}>
        <Grid>
          <AddDescription></AddDescription>
        </Grid>
      </Grid>
    ),
  },
  {
    path: '/add-price',
    element: (
      <Grid css={appGrid}>
        <Grid>
          <AddPrice></AddPrice>
        </Grid>
      </Grid>
    ),
  },
  {
    path: '/product-summary',
    element: (
      <Grid css={appGrid}>
        <Grid>
          <ProductSummary></ProductSummary>
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
