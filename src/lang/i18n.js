import { NativeModules, Platform } from 'react-native';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import zh from './zh.json';

const languageDetector = {
    type: 'languageDetector',
    detect: () => {
      console.log('are you running?');

      const deviceLanguage =
          Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
              NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
            : NativeModules.I18nManager.localeIdentifier;

console.log("LANG:",deviceLanguage); //en_US

      return deviceLanguage;
    },
    init: () => {},
    cacheUserLanguage: () => {},
  };

//console.log(`lang:`, getLanguage());

const resources = {
  en: en,
  zh: zh,
};

i18n
  .use(languageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    compatibilityJSON: 'v3',
    resources,
    //lng: 'en',// default language to use.
  });

export default {i18n};