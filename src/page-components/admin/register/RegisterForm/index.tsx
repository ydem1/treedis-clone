'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRegistrationStore } from '@/store/registrationStore';
import { yupResolver } from '@hookform/resolvers/yup';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, TextField, Typography } from '@mui/material';
import PasswordField from '@/components/FormField/PasswordField';
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(REGISTER_FORM_VALIDATION_SCHEMA),
  });

  const setData = useRegistrationStore(state => state.setData);

  const onSubmit = (data: RegisterFormData) => {
    setData({
      email: data.email,
      password: data.password,
      fullName: `${data.firstName} ${data.lastName}`,
      phone: '380962064212',
    });

    reset();
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

        <PasswordField
          label="Password"
          register={register('password')}
          error={!!errors.password}
          helperText={
            errors.password?.message ||
            'Password must contain 8 characters, 1 uppercase, 1 lowercase, and 1 digit.'
          }
        />

        <PasswordField
          label="Confirm Password"
          register={register('confirmPassword')}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
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
