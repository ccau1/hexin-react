import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { IntlTypes } from './actions';

// Our translated strings
import en from '../../Locales/default.json';
import zh_hk from '../../Locales/zh-hk.json';
import zh_cn from '../../Locales/zh-cn.json';

const languages = { en, zh_hk, zh_cn };

export const INITIAL_STATE = Immutable({
  defaultLocale: 'en',
  locale: 'en',
  formats: {},
  messages: en,
  defaultFormats: {},
  textComponent: 'span'
});

export default createReducer(INITIAL_STATE, {
  [IntlTypes.UPDATE_INTL]: (state, { locale }) => {
    return state
      .set('locale', locale)
      .set('messages', languages[locale.replace('-', '_')]);
  }
});
