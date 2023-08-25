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

import Autocomplete from '@mui/material/Autocomplete';
import { useContext } from 'react';
import { ProductContext } from '../mainApp';

const options = ['Hourly', 'Daily'];

const AddPrice = () => {
  const [value, setValue] = React.useState<string | null>();
  const [inputValue, setInputValue] = React.useState('');

  const product = useContext(ProductContext);

  const methods = useForm();

  const onSubmitPrice = (data: any, e: any) => {
    e.preventDefault();
    product.setPurchasePrice(data.purchasePrice);
    product.setRent(data.productRent);
    product.setRentType(inputValue);

    navigate('/product-summary', { replace: true });
  };

  const navigate = useNavigate();

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitPrice)}>
          <Grid container lg={12}>
            <Grid
              marginBottom={'20px'}
              css={textFieldStyle}
              textAlign={'center'}
              item
              lg={12}
            >
              Select Price
            </Grid>

            {/* Price */}
            <Grid item lg={12} marginBottom={'20px'}>
              <TextField
                placeholder='Purchase Price'
                fullWidth
                InputLabelProps={{ shrink: false }}
                {...methods.register('purchasePrice')}
                id='purchasePrice'
                value={methods.watch('purchasePrice')}
              />
            </Grid>

            <Grid
              display={'flex'}
              item
              lg={12}
              alignItems={'end'}
              marginBottom={'20px'}
            >
              <Grid item lg={4}>
                <Grid css={textFieldStyle} textAlign={'center'} item lg={12}>
                  Rent
                </Grid>

                {/* Rent */}
                <Grid>
                  <TextField
                    placeholder='$'
                    fullWidth
                    InputLabelProps={{ shrink: false }}
                    {...methods.register('productRent')}
                    id='productRent'
                    value={methods.watch('productRent')}
                  />
                </Grid>
              </Grid>

              <Grid item lg={8}>
                <Autocomplete
                  value={value}
                  onChange={(event: any, newValue: string | null) => {
                    setValue(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id='controllable-states-demo'
                  options={options}
                  renderInput={params => (
                    <TextField
                      {...params}
                      fullWidth
                      placeholder='Select option'
                      InputLabelProps={{ shrink: false }}
                      {...methods.register('rentType')}
                      id='rentType'
                      value={methods.watch('rentType')}
                    />
                  )}
                />
              </Grid>
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
                  onClick={() => navigate('/add-description')}
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

export default AddPrice;
