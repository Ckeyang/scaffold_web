import {computed, ref} from 'vue'
import {defineStore} from 'pinia'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// @ts-ignore
import en from 'element-plus/dist/locale/en.mjs'

export const useCommonState = defineStore('common',
    () => {
        const language = ref('zh-cn')
        const setLang = (val: string) => {
            language.value = val
        }
        const locale = computed(() => language.value === 'zh-cn' ? zhCn : en);
        return {language, locale, setLang}
    },
    {
        persist: {
            enabled: true,
            strategies: [
                {
                    "key": 'common',
                    "storage": localStorage,
                    "paths": ['language']
                }
            ]
        }
    })
