import instance from "../utils/request";

//
export function findPage(searchParams) {
//
    return instance.get("brand", {params: searchParams})
}

/**
 * 通过id删除
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
export function ADeleteById(id) {

    return instance.delete(`brand/${id}`)
}

/**
 * 批量删除
 * @param ids
 * @returns {Promise<AxiosResponse<any>>}
 * @constructor
 */
export function ABatchDeleteById(ids) {
    return instance.delete(`brand/batch/${ids}`)
}

export function addEntity(brand) {
    return instance.post(`brand`,brand)
}