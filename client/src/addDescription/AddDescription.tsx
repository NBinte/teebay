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
import { textFieldStyle } from '../assets/styles/signUpStyle';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TextareaAutosize } from '@mui/base';
import { useContext } from 'react';
import { ProductContext } from '../mainApp';

const AddDescription = () => {
  const methods = useForm();

  const product = useContext(ProductContext);

  const onSubmitDescription = (data: any, e: any) => {
    e.preventDefault();
    product.setDescription(data.productDescription);
    navigate('/add-price', { replace: true });
  };

  const navigate = useNavigate();

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitDescription)}>
          <Grid container lg={12}>
            <Grid
              marginBottom={'20px'}
              css={textFieldStyle}
              textAlign={'center'}
              item
              lg={12}
            >
              Select description
            </Grid>

            {/* Description */}
            <Grid item lg={12} marginBottom={'20px'}>
              <TextareaAutosize
                style={{ width: '100%' }}
                minRows={10}
                {...methods.register('productDescription')}
                id='productDescription'
                value={methods.watch('productDescription')}
              ></TextareaAutosize>
            </Grid>

            <Grid
              item
              lg={12}
              display={'flex'}
              justifyContent={'space-between'}
            >
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
                  onClick={() => navigate('/add-category')}
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
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddDescription;
