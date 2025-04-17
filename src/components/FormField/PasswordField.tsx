import React, { FC, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';

type PasswordFieldProps = {
  label: string;
  register: UseFormRegisterReturn;
  error: boolean;
  helperText: React.ReactNode;
};

export const PasswordField: FC<PasswordFieldProps> = ({
  label,
  register,
  error,
  helperText,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  return (
    <TextField
      label={label}
      type={showPassword ? 'text' : 'password'}
      {...register}
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: (
          <IconButton
            aria-label={
              showPassword ? 'hide the password' : 'display the password'
            }
            onClick={toggleShowPassword}
            onMouseDown={e => e.preventDefault()}
            edge="start"
          >
            {showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
          </IconButton>
        ),
      }}
    />
  );
};

export default PasswordField;
