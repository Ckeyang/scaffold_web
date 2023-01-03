export interface Response {
    code: string | number,
    data?: ResponseSelf,
    message?: string
}

export interface ResponseSelf {
    code: string | number,
    msg?: string,
    data?: object | [] | any,
}
