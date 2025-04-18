'use client';

import React, { FC, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { Typography, useTheme } from '@mui/material';

type Props = {
  name: string;
  defaultCountry?: string;
};

export const PhoneField: FC<Props> = ({ name, defaultCountry = 'us' }) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors?.[name]?.message as string | undefined;

  const borderColor = error
    ? theme.palette.error.main
    : isFocused
      ? theme.palette.primary.main
      : theme.palette.grey[400];

  return (
    <div
      style={{ '--custom-border-color': borderColor } as React.CSSProperties}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <PhoneInput
            {...field}
            country={defaultCountry}
            inputStyle={{
              width: '100%',
              fontSize: '16px',
              paddingBlock: '14px',
              backgroundColor: 'inherit',
              borderColor,
              borderRadius: '8px',
              outline: 'none',
              boxShadow: 'none',
            }}
            specialLabel=""
            onChange={value => field.onChange(value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        )}
      />

      {error && (
        <Typography
          color="error"
          sx={{ margin: '3px 14px -10px' }}
          fontSize={12}
          mt={0.5}
        >
          {error}
        </Typography>
      )}
    </div>
  );
};
