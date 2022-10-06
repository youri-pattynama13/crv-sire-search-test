import {
    createI18n
} from 'vue-i18n'

import { messages, defaultLocale } from '@/i18n/config';

export const i18n = createI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
});

export default i18n