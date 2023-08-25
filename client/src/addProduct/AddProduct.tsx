/** @jsxImportSource @emotion/react */

import React from 'react';
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { textFieldStyle } from '../assets/styles/signUpStyle';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const methods = useForm();

  const navigate = useNavigate();

  const onSubmit = (data: any) => {};

  const products = [
    {
      id: 0,
      title: 'Pro 1',
      price: 100,
      rent: 45,
      rentType: 'daily',
      description: 'Test',
      views: 6,
      createdAt: '2023-08-25T09:29:45.586Z',
      categories: [
        {
          id: 0,
          name: 'cat 1',
        },
        {
          id: 1,
          name: 'cat 2',
        },
      ],
    },
    {
      id: 1,
      title: 'Pro 2',
      price: 200,
      rent: 30,
      rentType: 'hourly',
      description: 'Test',
      views: 7,
      createdAt: '2023-08-25T09:29:45.586Z',
      categories: [
        {
          id: 0,
          name: 'cat 3',
        },
        {
          id: 1,
          name: 'cat 4',
        },
      ],
    },
  ];

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container>
            <Grid
              marginBottom={'20px'}
              css={textFieldStyle}
              textAlign={'center'}
              item
              lg={12}
            >
              MY PRODUCTS
            </Grid>

            <Grid container>
              {products.map((eachProduct, index) => {
                return (
                  <>
                    <Grid
                      border={'1px solid grey'}
                      padding={'50px'}
                      container
                      marginBottom={'20px'}
                    >
                      <Grid
                        display={'flex'}
                        justifyContent={'space-between'}
                        flexDirection={'row'}
                        item
                        lg={12}
                      >
                        <Grid>{eachProduct.title}</Grid>
                        <Grid>
                          <DeleteIcon></DeleteIcon>
                        </Grid>
                      </Grid>

                      <Grid
                        marginBottom={'10px'}
                        display={'flex'}
                        flexDirection={'row'}
                        item
                        lg={12}
                      >
                        <Grid>Categories: {'  '}</Grid>
                        <Grid>
                          {eachProduct.categories.map((eachCat, index) => {
                            const length = eachProduct.categories.length;

                            return (
                              <>
                                {eachCat.name}

                                {index !== length - 1 && ','}
                              </>
                            );
                          })}
                        </Grid>
                      </Grid>

                      <Grid
                        marginBottom={'20px'}
                        display={'flex'}
                        flexDirection={'row'}
                        item
                        lg={12}
                      >
                        <Grid>Price:</Grid>
                        <Grid>{`$${eachProduct.price} | `} </Grid>
                        <Grid>Rent:</Grid>
                        <Grid>{`$${eachProduct.rent}`} </Grid>
                        <Grid>{`${eachProduct.rentType}`} </Grid>
                      </Grid>

                      <Grid item lg={12} marginBottom={'50px'}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </Grid>

                      <Grid
                        marginBottom={'10px'}
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        item
                        lg={12}
                      >
                        <Grid display={'flex'} flexDirection={'row'}>
                          <Grid>Date Posted:</Grid>
                          <Grid>{`${eachProduct.createdAt}`} </Grid>
                        </Grid>
                        <Grid display={'flex'} flexDirection={'row'}>
                          <Grid>{`${eachProduct.views}`} </Grid>
                          <Grid>Views</Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                );
              })}
            </Grid>

            <Grid
              item
              lg={12}
              display={'flex'}
              justifyContent={'center'}
              marginBottom={'20px'}
            >
              <Button
                variant='contained'
                type='submit'
                sx={{ backgroundColor: '#6558f5' }}
                onClick={() => navigate('/add-title')}
              >
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddProduct;
