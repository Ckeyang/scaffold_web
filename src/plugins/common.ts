/**
 * blob 变成 url
 * @param blob
 */
export const blobToUrl = (blob: Blob) => {
    return new Promise((resolve) => {
        let fr = new FileReader();
        fr.readAsDataURL(blob);
        fr.onload = (e) => {
            resolve(e?.target?.result)
        }
    })
}
/**
 * 创建自定义file Input
 */
export const createFileInput = () => {
    let input = document.createElement("input");
    input.type = 'file';
    return input;
}
/**
 * 文件导入
 */
export const fileInput = () => {
    let input = document.createElement("input");
    input.type = 'file';
    input.click();
    return new Promise((resolve, reject) => {
        input.addEventListener('change', (e) => {
            // @ts-ignore
            let file = e?.target?.files[0];
            if (file instanceof Blob) {
                resolve(file)
            } else {
                reject({msg: '文件错误'})
            }
        })
    })

}
