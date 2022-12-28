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
