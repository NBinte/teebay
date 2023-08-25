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
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { ProductContext } from '../mainApp';
import { ADD_PRODUCT } from '../graphql/addProductMutation';
import { useMutation } from '@apollo/client';
import Swal from 'sweetalert2';

const ProductSummary = () => {
  const product = useContext(ProductContext);

  const methods = useForm();

  const [addProduct, { data, error, loading }] = useMutation(ADD_PRODUCT);

  const onSubmitProduct = (data: any, e: any) => {
    let categoryArray: any = [];

    product.categories.map((each: any) => {
      let obj: any = {};

      obj['name'] = each?.title;

      categoryArray.push(obj);
    });

    const CreateProductInput = {
      title: product.title,
      categories: categoryArray,
      description: product.description,
      price: parseInt(`${product.purchasePrice}`),
      rent: parseInt(`${product.rent}`),
      rentType: product.rentType,
    };

    addProduct({
      variables: {
        createProductInput: CreateProductInput,
      },
    })
      .then(response => {
        Swal.fire('Successfully Product Added!', '', 'success').then(() => {
          navigate('/add-product');
        });
      })
      .catch(error => {
        //
      });
  };

  const navigate = useNavigate();

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitProduct)}>
          <Grid container>
            <Grid
              marginBottom={'20px'}
              css={textFieldStyle}
              textAlign={'center'}
              item
              lg={12}
            >
              Summary
            </Grid>

            <Grid
              marginBottom={'20px'}
              display={'flex'}
              flexDirection={'row'}
              item
              lg={12}
            >
              <Grid>Title:</Grid>
              <Grid>{product.title} </Grid>
            </Grid>

            <Grid
              marginBottom={'20px'}
              display={'flex'}
              flexDirection={'row'}
              item
              lg={12}
            >
              <Grid>Categories:</Grid>
              <Grid>
                {product?.categories?.map((eachCat: any, index) => {
                  const length = product.categories.length;
                  return (
                    <>
                      {eachCat?.title}

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
              <Grid>Description:</Grid>
              <Grid>{product.description}</Grid>
            </Grid>

            <Grid
              marginBottom={'20px'}
              display={'flex'}
              flexDirection={'row'}
              item
              lg={12}
            >
              <Grid>Price:</Grid>
              <Grid>{`$${product.purchasePrice}`},</Grid>
              <Grid>To rent:</Grid>
              <Grid>
                {`$${product.rent}`} per {`${product.rentType}`}
              </Grid>
            </Grid>

            <Grid
              item
              lg={6}
              display={'flex'}
              justifyContent={'center'}
              marginBottom={'20px'}
            >
              <Button
                variant='contained'
                type='submit'
                sx={{ backgroundColor: '#6558f5' }}
                onClick={() => navigate('/add-price')}
              >
                Back
              </Button>
            </Grid>

            <Grid
              item
              lg={6}
              display={'flex'}
              justifyContent={'center'}
              marginBottom={'20px'}
            >
              <Button
                variant='contained'
                type='submit'
                sx={{ backgroundColor: '#6558f5' }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default ProductSummary;
