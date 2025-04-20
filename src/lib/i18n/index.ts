import { initReactI18next } from 'react-i18next/initReactI18next';
import {
  createInstance,
  type i18n,
  type InitOptions,
  type TFunction,
} from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';

const initI18next = async (
  lng: string,
  ns: string | undefined,
): Promise<i18n> => {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lng, ns) as InitOptions);

  return i18nInstance;
};

interface UseTranslationOptions {
  keyPrefix?: string;
}

interface UseTranslationResult {
  t: TFunction;
  i18n: i18n;
}

export async function useTranslation(
  lng: string,
  ns?: string,
  options: UseTranslationOptions = {},
): Promise<UseTranslationResult> {
  const i18nextInstance = await initI18next(lng, ns);

  return {
    t: i18nextInstance.getFixedT(lng, ns, options.keyPrefix),
    i18n: i18nextInstance,
  };
}
