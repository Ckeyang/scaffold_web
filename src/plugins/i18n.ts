import {createI18n} from 'vue-i18n'
// @ts-ignore
import zh from './lang/zh'
// @ts-ignore
import en from './lang/en'
import pinia from '@/plugins/pinia'
import {useCommonState} from "@/stores/common";
import {storeToRefs} from "pinia";

/**
 * 引入pinia
 */
const commonState = useCommonState(pinia);
const {language} = storeToRefs(commonState)

const lang = {
    'en': {...en},
    'zh-cn': {...zh}
}
const i18n = createI18n({
    globalInjection: true,
    locale: language.value,
    fallbackLocale: 'zh-cn',
    messages: lang
})
export default i18n;
