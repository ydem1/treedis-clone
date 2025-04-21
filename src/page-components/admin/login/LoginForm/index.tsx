'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'next/navigation';
import { useLoginStoreStore } from '@/store/loginStore';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import { PasswordField } from '@/components/FormField/PasswordField';
import { LocalizedLink } from '@/components/Link';
import { useTranslation } from '@/lib/i18n/client';
import { PATHNAMES } from '@/constants/routes';
import { NC as VALIDATION_NC } from '@/constants/validationSchemas/trns';
import { loginTrns, NC } from '../trns';
import { LOGIN_FORM_VALIDATION_SCHEMA } from './constants';

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const locale = useParams()?.locale as string;
  const { t: tLogin } = useTranslation(locale, NC);
  const { t: tValidation } = useTranslation(locale, VALIDATION_NC);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(LOGIN_FORM_VALIDATION_SCHEMA(tValidation)),
  });
  const setData = useLoginStoreStore(state => state.setData);

  const onSubmit = (data: LoginFormData) => {
    setData({
      email: data.email,
      password: data.password,
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
      <Typography
        variant="h4"
        sx={{ marginBottom: '40px' }}
        dangerouslySetInnerHTML={{ __html: tLogin(loginTrns.title) }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <TextField
          label={tLogin(loginTrns.emailLabel)}
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <PasswordField
          label={tLogin(loginTrns.passwordLabel)}
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
        {tLogin(loginTrns.loginButton)}
      </Button>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button variant="text">{tLogin(loginTrns.forgotPasswordButton)}</Button>

        <LocalizedLink href={PATHNAMES.REGISTER}>
          <Button variant="text">
            {tLogin(loginTrns.createNewAccountButton)}
          </Button>
        </LocalizedLink>
      </Box>
    </Box>
  );
};
