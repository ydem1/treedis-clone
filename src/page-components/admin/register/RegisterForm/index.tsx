'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { PATHNAMES } from '@/constants/routes';
import { REGISTER_FORM_VALIDATION_SCHEMA } from './constants';

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(REGISTER_FORM_VALIDATION_SCHEMA),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log('Register Data:', data);
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(show => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexBasis: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '451px',
        height: '100%',
        marginInline: 'auto',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '40px' }}>
        Register
      </Typography>

      <Link href={PATHNAMES.LOGIN}>
        <Button variant="text">
          <ArrowBackIcon />
        </Button>
      </Link>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          paddingBlock: '16px',
          maxHeight: '60vh',
          overflowY: 'auto',
        }}
      >
        <TextField
          label="First Name"
          type="text"
          {...register('firstName')}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />

        <TextField
          label="Last Name"
          type="text"
          {...register('lastName')}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />

        <TextField
          label="Email Address"
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          error={!!errors.password}
          helperText={
            errors.password?.message || (
              <span>
                Must be at least 8 characters, contain 1 uppercase, 1 <br />
                lowercase, and 1 digit.
              </span>
            )
          }
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="start"
              >
                {showPassword ? (
                  <VisibilityOutlined />
                ) : (
                  <VisibilityOffOutlined />
                )}
              </IconButton>
            ),
          }}
        />

        <TextField
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          {...register('confirmPassword')}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label={
                  showConfirmPassword
                    ? 'hide the password'
                    : 'display the password'
                }
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="start"
              >
                {showConfirmPassword ? (
                  <VisibilityOutlined />
                ) : (
                  <VisibilityOffOutlined />
                )}
              </IconButton>
            ),
          }}
        />
      </Box>

      <Button
        type="submit"
        color="primary"
        fullWidth
        sx={{
          marginBlock: '16px',
        }}
      >
        Next
      </Button>
    </Box>
  );
};
