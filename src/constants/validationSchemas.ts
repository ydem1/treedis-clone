import * as Yup from 'yup';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{1,}$/;

export const EMAIL_VALIDATION_SCHEMA = Yup.string()
  .trim()
  .test('custom-email', 'Email must be a valid email address', value =>
    emailRegex.test(value || ''),
  )
  .required('email is a required field');
