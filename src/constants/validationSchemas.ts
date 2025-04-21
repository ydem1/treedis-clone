import * as Yup from 'yup';

export const REQUIRED_VALIDATION = (message: string = 'Required field') =>
  Yup.string().trim().required(message);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{1,}$/;

export const EMAIL_VALIDATION = REQUIRED_VALIDATION().test(
  'custom-email',
  'Email must be a valid email address',
  value => emailRegex.test(value || ''),
);

export const LENGTH_VALIDATION = (min: number, max: number) =>
  REQUIRED_VALIDATION()
    .min(min, `Minimum length is ${min}`)
    .max(max, `Maximum length is ${max}`);

export const PHONE_LENGTH_VALIDATION = (min: number, max: number) =>
  REQUIRED_VALIDATION().test(
    'phone-length',
    `Phone number must have between ${min} and ${max} digits`,
    value => {
      if (!value) return false;
      const digitsOnly = value.replace(/\D/g, '');
      return digitsOnly.length >= min && digitsOnly.length <= max;
    },
  );

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const PASSWORD_VALIDATION = REQUIRED_VALIDATION().matches(
  passwordRegex,
  'Password must be at least 8 english characters, and contain 1 uppercase, 1 lowercase and 1 digit',
);

export const REPEAT_CONFIRM_PASSWORD_VALIDATION = (ref: string) =>
  REQUIRED_VALIDATION().oneOf([Yup.ref(ref)], 'Passwords do not match');
