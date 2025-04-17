import * as Yup from 'yup';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{1,}$/;

export const EMAIL_VALIDATION_SCHEMA = Yup.string()
  .trim()
  .required('email is a required field')
  .test('custom-email', 'Email must be a valid email address', value =>
    emailRegex.test(value || ''),
  );

export const LENGTH_VALIDATION = (min: number, max: number) =>
  Yup.string()
    .trim()
    .required('Required field')
    .min(min, `Minimum length is ${min}`)
    .max(max, `Maximum length is ${max}`);

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const PASSWORD_VALIDATION_SCHEMA = Yup.string()
  .required('Required field')
  .matches(
    passwordRegex,
    'Password must be at least 8 english characters, and contain 1 uppercase, 1 lowercase and 1 digit',
  );

export const REPEAT_CONFIRM_PASSWORD_VALIDATION_SCHEMA = (ref: string) =>
  Yup.string()
    .required('Required field')
    .oneOf([Yup.ref(ref)], 'Passwords do not match');
