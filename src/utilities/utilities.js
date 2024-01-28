import axios from "../axios/axios"

export const toPersianDigits = (str) => {
    let id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return str.replace(/[0-9]/g, function (w) {
        return id[+w];
    });
};

export const getProducts = async (product, pageNum, pageLimit) => {
    try {
        const { data } = await axios.get(`/products/getProducts/${product}?pageNum=${pageNum}&pageLimit=${pageLimit}`)
        console.log(product ," : ", data)
    } catch (error) {
        throw new Error("Error: ", error)
    }
}