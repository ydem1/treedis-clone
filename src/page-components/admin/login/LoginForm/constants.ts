import * as Yup from 'yup';
import { EMAIL_VALIDATION, REQUIRED_VALIDATION } from '@/constants/validationSchemas';

export const LOGIN_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  email: EMAIL_VALIDATION,
  password: REQUIRED_VALIDATION(),
});
