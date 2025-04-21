import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { validationTrns } from './trns';

export const REQUIRED_VALIDATION = (t: TFunction) =>
  Yup.string().trim().required(t(validationTrns.required));

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{1,}$/;

export const EMAIL_VALIDATION = (t: TFunction) =>
  REQUIRED_VALIDATION(t).test('custom-email', t(validationTrns.email), value =>
    emailRegex.test(value || ''),
  );

export const LENGTH_VALIDATION = (t: TFunction, min: number, max: number) =>
  REQUIRED_VALIDATION(t)
    .min(min, t(validationTrns.minSymbols, { min }))
    .max(max, t(validationTrns.maxSymbols, { max }));

export const PHONE_LENGTH_VALIDATION = (
  t: TFunction,
  min: number,
  max: number,
) =>
  REQUIRED_VALIDATION(t).test(
    'phone-length',
    t(validationTrns.phoneLength, { min, max }),
    value => {
      if (!value) return false;
      const digitsOnly = value.replace(/\D/g, '');
      return digitsOnly.length >= min && digitsOnly.length <= max;
    },
  );

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const PASSWORD_VALIDATION = (t: TFunction) =>
  REQUIRED_VALIDATION(t).matches(
    passwordRegex,
    t(validationTrns.passwordStrength),
  );

export const REPEAT_CONFIRM_PASSWORD_VALIDATION = (t: TFunction, ref: string) =>
  REQUIRED_VALIDATION(t).oneOf([Yup.ref(ref)], t(validationTrns.passwordMatch));
