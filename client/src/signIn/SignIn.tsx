import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { textFieldStyle } from '../assets/styles/signUpStyle';
import { useNavigate } from 'react-router-dom';
import { FETCH_USER } from '../graphql/signInQuery';
import { useQuery } from '@apollo/client';
import Swal from 'sweetalert2';

const bcrypt = require('bcryptjs-react');

/** @jsxImportSource @emotion/react */

const SignIn = () => {
  const methods = useForm();

  const [runQuery, setRunQuery] = useState(true);

  const { data: fetchedUser } = useQuery(FETCH_USER, {
    variables: {
      getUserInput: {
        email: methods.watch('emailLogin'),
      },
    },
    skip: runQuery,
  });

  const onSubmit = (data: any) => {
    setRunQuery(false);

    const ifPasswordMatched = bcrypt.compareSync(
      data.passwordLogin,
      fetchedUser?.getUserByField?.password,
    );

    if (ifPasswordMatched) {
      navigate('/add-product');
    } else {
      Swal.fire('Login Failed!', '', 'error');
      methods.reset();
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(show => !show);

  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container>
            <Grid
              marginBottom={'20px'}
              css={textFieldStyle}
              textAlign={'center'}
              lg={12}
            >
              SIGN IN
            </Grid>

            {/* Email */}
            <Grid item lg={12} marginBottom={'20px'}>
              <TextField
                fullWidth
                placeholder='Email'
                InputLabelProps={{ shrink: false }}
                {...methods.register('emailLogin')}
                id='emailLogin'
                value={methods.watch('emailLogin')}
              />
            </Grid>

            {/* Password */}
            <Grid item lg={12} marginBottom={'20px'}>
              <FormControl fullWidth>
                <OutlinedInput
                  placeholder='Password'
                  {...methods.register('passwordLogin')}
                  id='passwordLogin'
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid display={'flex'} justifyContent={'center'}>
            <Button
              variant='contained'
              type='submit'
              sx={{ backgroundColor: '#6558f5' }}
            >
              LOGIN
            </Button>
          </Grid>

          <Grid
            item
            lg={12}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'baseline'}
          >
            <Grid>Don't have an account?</Grid>
            <Grid>
              <Button variant='text' onClick={() => navigate('/sign-up')}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default SignIn;
