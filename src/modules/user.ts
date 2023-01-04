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
    "roleId"?: string[],
    "name": string,
    "password": string,
    "phone": string,
    "remark": string,
    "sex": string,
    "status": string
}

export interface RoleForm {
    "id"?: number,
    "isValid": string,
    "remark": string,
    "roleCode": string,
    "roleName": string
}
