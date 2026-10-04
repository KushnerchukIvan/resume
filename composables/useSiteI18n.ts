import type { SiteLocale } from '~/plugins/i18n'

export function useSiteI18n() {
  const { $i18n } = useNuxtApp()
  return {
    locale: computed(() => $i18n.locale.value as SiteLocale),
    t: $i18n.t,
    setLocale: $i18n.setLocale,
  }
}
