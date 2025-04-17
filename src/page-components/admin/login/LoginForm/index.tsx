'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import PasswordField from '@/components/FormField/PasswordField';
import { PATHNAMES } from '@/constants/routes';
import { LOGIN_FORM_VALIDATION_SCHEMA } from './constants';

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(LOGIN_FORM_VALIDATION_SCHEMA),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Login Data:', data);
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
        Welcome! <br />
        Login to continue
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <TextField
          label="Email Address"
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <PasswordField
          label="Password"
          register={register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
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
        Login
      </Button>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button variant="text">Forgot password?</Button>

        <Link href={PATHNAMES.REGISTER}>
          <Button variant="text">Create New Account</Button>
        </Link>
      </Box>
    </Box>
  );
};
