export interface Form {
    [index: string]: FormItem
}

export interface FormItem {
    name: string,
    tool: string,
    noEdit?: boolean,
    params?: FormOptions
}

export interface FormOption {
    value: string,
    label: string
}

export interface FormOptions {
    [index: number]: FormOption
}


const getFormItem = (params: FormItem) => {
    let formItem: FormItem = params
    return formItem
}
export {getFormItem}
