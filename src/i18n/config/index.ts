import {
    Locales
} from './locales'

import enUs from '../en_us.json'
import nlNl from '../nl_nl.json'

export const messages = {
    [Locales.enUs]: enUs,
    [Locales.nlNl]: nlNl,
}

export const defaultLocale = Locales.nlNl;