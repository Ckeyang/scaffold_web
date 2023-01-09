export interface Form {
  [index: string]: FormItem;
}

export interface FormItem {
  id?: string;
  name: string;
  tool: string;
  noEdit?: boolean;
  params?: FormOptions;
}

export interface FormOption {
  value: string;
  label: string;
}

export interface FormOptions {
  [index: number]: FormOption;
}

const getFormItem = (params: FormItem) => {
  const formItem: FormItem = params;
  return formItem;
};
export { getFormItem };
