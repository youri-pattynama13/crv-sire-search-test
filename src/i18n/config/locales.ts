interface I18nLanguage {
    param: string;
    title: string;
}

export enum Locales {
  enUs = 'en_us',
  nlNl = 'nl_nl',
}

export const LayoutLanguages: Array<I18nLanguage> = [
  {
    param: Locales.enUs,
    title: 'English',
  },
  {
    param: Locales.nlNl,
    title: 'Nederlands',
  }
];