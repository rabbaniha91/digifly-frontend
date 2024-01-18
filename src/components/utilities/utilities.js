export const toPersianDigits = (str) => {
    let id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return str.replace(/[0-9]/g, function (w) {
        return id[+w];
    });
};