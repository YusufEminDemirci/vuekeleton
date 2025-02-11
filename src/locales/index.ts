import { createI18n, type I18n } from 'vue-i18n'
import { EN } from '@/locales/en'

export const i18n: I18n = createI18n({
  locale: 'en',
  messages: {
    en: EN,
  },
})
