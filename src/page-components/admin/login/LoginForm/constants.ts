import { TFunction } from 'i18next';
import * as Yup from 'yup';
import {
  EMAIL_VALIDATION,
  REQUIRED_VALIDATION,
} from '@/constants/validationSchemas';

export const LOGIN_FORM_VALIDATION_SCHEMA = (t: TFunction) =>
  Yup.object().shape({
    email: EMAIL_VALIDATION(t),
    password: REQUIRED_VALIDATION(t),
  });
