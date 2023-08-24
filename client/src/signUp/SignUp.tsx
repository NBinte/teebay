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
import { textFieldStyle } from '../assets/styles/signUpStyle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

/** @jsxImportSource @emotion/react */

const SignUp = () => {
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
              SIGN UP
            </Grid>

            <Grid
              display={'flex'}
              item
              lg={12}
              justifyContent={'space-between'}
              marginBottom={'20px'}
            >
              {/* First Name */}
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  placeholder='First Name'
                  InputLabelProps={{ shrink: false }}
                  {...methods.register('firstName')}
                  id='firstName'
                  value={methods.watch('firstName')}
                />
              </Grid>

              {/* Last Name */}
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  placeholder='Last Name'
                  InputLabelProps={{ shrink: false }}
                  {...methods.register('lastName')}
                  id='lastName'
                  value={methods.watch('lastName')}
                />
              </Grid>
            </Grid>

            {/* Address */}
            <Grid item lg={12} marginBottom={'20px'}>
              <TextField
                fullWidth
                placeholder='Address'
                InputLabelProps={{ shrink: false }}
                {...methods.register('address')}
                id='address'
                value={methods.watch('address')}
              />
            </Grid>

            <Grid
              display={'flex'}
              item
              lg={12}
              justifyContent={'space-between'}
              marginBottom={'20px'}
            >
              {/* Email */}
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  placeholder='Email'
                  InputLabelProps={{ shrink: false }}
                  {...methods.register('email')}
                  id='email'
                  value={methods.watch('email')}
                />
              </Grid>

              {/* Phone Number*/}
              <Grid item lg={6}>
                <TextField
                  fullWidth
                  placeholder='Phone Number'
                  InputLabelProps={{ shrink: false }}
                  {...methods.register('phoneNumber')}
                  id='phoneNumber'
                  value={methods.watch('phoneNumber')}
                />
              </Grid>
            </Grid>

            {/* Password */}
            <Grid item lg={12} marginBottom={'20px'}>
              <FormControl fullWidth>
                <OutlinedInput
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

            {/* Confirm Password */}
            <Grid item lg={12} marginBottom={'20px'}>
              <FormControl fullWidth>
                <OutlinedInput
                  {...methods.register('confirmPassword', {
                    validate: {
                      positive: v => v == methods.watch('password'),
                    },
                  })}
                  id='confirmPassword'
                  type={showConfirmPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                        edge='end'
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
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
              Register
            </Button>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default SignUp;
