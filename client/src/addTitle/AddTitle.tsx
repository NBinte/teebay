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

const AddTitle = () => {
  const methods = useForm();

  const product = useContext(ProductContext);

  const navigate = useNavigate();

  const onSubmitTitle = (data: any, e: any) => {
    e.preventDefault();

    product.setTitle(data.productTitle);

    navigate('/add-category', { replace: true });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitTitle)}>
          <Grid container>
            <Grid
              marginBottom={'20px'}
              css={textFieldStyle}
              textAlign={'center'}
              item
              lg={12}
            >
              Select a title for your product
            </Grid>

            {/* Title */}
            <Grid item lg={12} marginBottom={'20px'}>
              <TextField
                fullWidth
                InputLabelProps={{ shrink: false }}
                {...methods.register('productTitle')}
                id='productTitle'
                value={methods.watch('productTitle')}
              />
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
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddTitle;
