import {ref} from 'vue'
import {defineStore} from 'pinia'
import type {User} from "@/modules/user";

export const useUserState = defineStore('user',
    () => {
        const token = ref('')
        const userInfo = ref<User>();
        const setToken = (val: string) => {
            token.value = val;
            localStorage.setItem('token', val);
        }
        const setUserInfo = (val: User) => {
            userInfo.value = val;
        }
        const getUserInfo = () => {
            return userInfo.value
        }
        return {token, userInfo, setToken, setUserInfo, getUserInfo}
    },
    {
        persist: {
            enabled: true,
            strategies: [
                {
                    "key": 'user',
                    "storage": localStorage,
                    "paths": ['userInfo', 'token']
                }
            ]
        }
    })
