import instance from "../utils/request";
//
export function findPage(searchParams) {
//
    return instance.get("brand", {params: searchParams})
}