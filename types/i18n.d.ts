import type { Ref } from 'vue'
import type { SiteLocale } from '~/plugins/i18n'

interface SiteI18n {
  locale: Ref<SiteLocale>
  t: (key: string) => string
  setLocale: (locale: SiteLocale) => Promise<void>
}

declare module '#app' {
  interface NuxtApp { $i18n: SiteI18n }
}

declare module 'vue' {
  interface ComponentCustomProperties { $i18n: SiteI18n }
}

export {}
