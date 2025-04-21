import { TFunction } from 'i18next';
import * as Yup from 'yup';
import {
  EMAIL_VALIDATION,
  LENGTH_VALIDATION,
  PASSWORD_VALIDATION,
  PHONE_LENGTH_VALIDATION,
  REPEAT_CONFIRM_PASSWORD_VALIDATION,
} from '@/constants/validationSchemas';

export const REGISTER_FORM_VALIDATION_SCHEMA = (t: TFunction) =>
  Yup.object().shape({
    firstName: LENGTH_VALIDATION(t, 2, 30),
    lastName: LENGTH_VALIDATION(t, 2, 30),
    email: EMAIL_VALIDATION(t),
    phone: PHONE_LENGTH_VALIDATION(t, 10, 15),
    password: PASSWORD_VALIDATION(t),
    confirmPassword: REPEAT_CONFIRM_PASSWORD_VALIDATION(t, 'password'),
  });
