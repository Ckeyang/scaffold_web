import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useUserState = defineStore('user', () => {
    const token = ref('')
    const setToken = (val: string) => {
        token.value = val;
    }
    return {token, setToken}
})
