export interface List {
    list?: any,
    pageNum: number,
    pageSize: number,
    pages: number,
    size: number,
    total: number
}

export type ListType = {
    list?: any,
    pageNum: number,
    pageSize: number,
    pages: number,
    size: number,
    total: number
}

export type Params = {
    name: string,
    pageNum: number,
    pageSize: number,
    parentId: number
}
export type UserParams = {
    account: string,
    phone: string,
    address: string,
    remark: string,
    name: string,
    pageNum: number,
    pageSize: number
}

export type RoleParams = {
    roleName: string,
    pageNum: number,
    pageSize: number,
}
