export interface User {
    account?: string,
    age?: number,
    createId?: number,
    createTime?: string,
    id?: number,
    name?: string,
    phone?: string,
    remark?: string,
    roles?: any,
    sex?: string,
    status?: string,
    superAdmin?: any,
    token?: string,
    updateId?: number,
    updateTime?: string
}

export type UserType = {
    account: string,
    age: number,
    createId: number,
    createTime: string,
    id: number,
    name: string,
    phone: string,
    remark: string,
    roles: any,
    sex: string,
    status: string,
    superAdmin: any,
    token: string,
    updateId: number,
    updateTime: string
}

export interface UserForm {
    "account": string,
    "address": string,
    "age": number,
    "id"?: number,
    "name": string,
    "password": string,
    "phone": string,
    "remark": string,
    "sex": string,
    "status": string
}
