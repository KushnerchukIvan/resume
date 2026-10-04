import { createInstance } from 'i18next'
import en from '~/locales/en'
import uk from '~/locales/uk'

export type SiteLocale = 'uk' | 'en'

export default defineNuxtPlugin(async () => {
  const savedLocale = useCookie<SiteLocale>('portfolio-locale', {
    default: () => 'uk',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
  const locale = ref<SiteLocale>(savedLocale.value === 'en' ? 'en' : 'uk')
  const i18next = createInstance()

  await i18next.init({
    lng: locale.value,
    fallbackLng: 'uk',
    resources: { uk: { translation: uk }, en: { translation: en } },
    initImmediate: false,
    interpolation: { escapeValue: false },
  })

  i18next.on('languageChanged', (next) => {
    locale.value = next.startsWith('en') ? 'en' : 'uk'
  })

  return {
    provide: {
      i18n: {
        locale,
        t: (key: string) => String(i18next.t(key, { lng: locale.value })),
        setLocale: async (next: SiteLocale) => {
          await i18next.changeLanguage(next)
          savedLocale.value = next
        },
      },
    },
  }
})
