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
import { useForm, FormProvider } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { textFieldStyle } from '../assets/styles/signUpStyle';
import { useNavigate } from 'react-router-dom';

/** @jsxImportSource @emotion/react */

const SignIn = () => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

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
                {...methods.register('email')}
                id='email'
                value={methods.watch('email')}
              />
            </Grid>

            {/* Password */}
            <Grid item lg={12} marginBottom={'20px'}>
              <FormControl fullWidth>
                <OutlinedInput
                  placeholder='Password'
                  {...methods.register('password')}
                  id='password'
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
