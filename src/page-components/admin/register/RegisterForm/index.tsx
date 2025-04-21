'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'next/navigation';
import { useRegistrationStore } from '@/store/registrationStore';
import { yupResolver } from '@hookform/resolvers/yup';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, TextField, Typography } from '@mui/material';
import { PasswordField } from '@/components/FormField/PasswordField';
import { PhoneField } from '@/components/FormField/PhoneField';
import { LocalizedLink } from '@/components/Link';
import { useTranslation } from '@/lib/i18n/client';
import { PATHNAMES } from '@/constants/routes';
import { NC, registerTrns } from '../trns';
import { REGISTER_FORM_VALIDATION_SCHEMA } from './constants';

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export const RegisterForm = () => {
  const locale = useParams()?.locale as string;
  const { t: tRegister } = useTranslation(locale, NC);

  const methods = useForm<RegisterFormData>({
    resolver: yupResolver(REGISTER_FORM_VALIDATION_SCHEMA),
  });

  const setData = useRegistrationStore(state => state.setData);

  const onSubmit = (data: RegisterFormData) => {
    setData({
      email: data.email,
      password: data.password,
      fullName: `${data.firstName} ${data.lastName}`,
      phone: data.phone,
    });

    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(onSubmit)}
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
          {tRegister(registerTrns.title)}
        </Typography>

        <LocalizedLink href={PATHNAMES.LOGIN}>
          <Button variant="text">
            <ArrowBackIcon />
          </Button>
        </LocalizedLink>

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
            label={tRegister(registerTrns.firstNameLabel)}
            type="text"
            {...methods.register('firstName')}
            error={!!methods.formState.errors.firstName}
            helperText={methods.formState.errors.firstName?.message}
          />

          <TextField
            label={tRegister(registerTrns.lastNameLabel)}
            type="text"
            {...methods.register('lastName')}
            error={!!methods.formState.errors.lastName}
            helperText={methods.formState.errors.lastName?.message}
          />

          <PhoneField name="phone" />

          <TextField
            label={tRegister(registerTrns.emailLabel)}
            type="email"
            {...methods.register('email')}
            error={!!methods.formState.errors.email}
            helperText={methods.formState.errors.email?.message}
          />

          <PasswordField
            label={tRegister(registerTrns.passwordLabel)}
            register={methods.register('password')}
            error={!!methods.formState.errors.password}
            helperText={
              methods.formState.errors.password?.message ||
              tRegister(registerTrns.passwordRequirements)
            }
          />

          <PasswordField
            label={tRegister(registerTrns.confirmPasswordLabel)}
            register={methods.register('confirmPassword')}
            error={!!methods.formState.errors.confirmPassword}
            helperText={methods.formState.errors.confirmPassword?.message}
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
          {tRegister(registerTrns.nextButton)}
        </Button>
      </Box>
    </FormProvider>
  );
};
