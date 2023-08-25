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
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useContext } from 'react';
import { ProductContext } from '../mainApp';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const categories = [
  { id: 0, title: 'Electronics' },
  { id: 1, title: 'Furniture' },
  { id: 2, title: 'Home Appliances' },
  { id: 3, title: 'Sporting Goods' },
  { id: 4, title: 'Outdoor' },
  { id: 5, title: 'Toys' },
];

const AddCategory = () => {
  const methods = useForm();

  const product = useContext(ProductContext);

  const onSubmitCategory = (data: any, e: any) => {
    e.preventDefault();

    navigate('/add-description', { replace: true });
  };

  const navigate = useNavigate();

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitCategory)}>
          <Grid container lg={12}>
            <Grid
              marginBottom={'20px'}
              css={textFieldStyle}
              textAlign={'center'}
              item
              lg={12}
            >
              Select categories
            </Grid>

            {/* Category */}
            <Grid item lg={12} marginBottom={'20px'}>
              <Autocomplete
                onChange={(event, value) => product.setCategories(value)}
                isOptionEqualToValue={(option, value) =>
                  option.title === value.title
                }
                fullWidth
                multiple
                id='checkboxes-tags-demo'
                options={categories}
                disableCloseOnSelect
                getOptionLabel={option => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                renderInput={params => (
                  <TextField
                    {...params}
                    fullWidth
                    placeholder='Select Categories'
                    InputLabelProps={{ shrink: false }}
                    id='checkboxes-tags-demo'
                  />
                )}
              />
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
                  onClick={() => navigate('/add-title')}
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

export default AddCategory;
