import * as Yup from 'yup';
import { EMAIL_VALIDATION_SCHEMA } from '@/constants/validationSchemas';

export const LOGIN_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  email: EMAIL_VALIDATION_SCHEMA,
  password: Yup.string().trim().required('password is a required field'),
});
