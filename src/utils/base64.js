/**
 * 获取文件base64格式
 * @type {{getImgBase(*=): Promise<unknown>}}
 */
let base = {
    getImgBase(file) {
        return new Promise(resolve => {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = function (e) {
                resolve(e.target.result);
            }
        })
    }
}
export default base;