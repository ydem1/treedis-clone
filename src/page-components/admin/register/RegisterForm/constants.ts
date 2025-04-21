import * as Yup from 'yup';
import {
  EMAIL_VALIDATION,
  LENGTH_VALIDATION,
  PASSWORD_VALIDATION,
  PHONE_LENGTH_VALIDATION,
  REPEAT_CONFIRM_PASSWORD_VALIDATION,
} from '@/constants/validationSchemas';

export const REGISTER_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  firstName: LENGTH_VALIDATION(2, 30),
  lastName: LENGTH_VALIDATION(2, 30),
  email: EMAIL_VALIDATION,
  phone: PHONE_LENGTH_VALIDATION(10, 15),
  password: PASSWORD_VALIDATION,
  confirmPassword: REPEAT_CONFIRM_PASSWORD_VALIDATION('password'),
});
