import { StyledEngineProvider } from "@mui/material";
import styles from "../filter.module.css"
import { Divider } from "@mui/material"
const Brand = ({ enBrand, faBrand, setBrands }) => {
    return (
        <>
            <label
                htmlFor={enBrand}
                className={styles.labels}
            >
                <div >
                    <input
                        type="checkbox"
                        name={enBrand}
                        id={enBrand}
                        value={faBrand}
                        className={styles._input}
                        onChange={(e) => {
                            if (e.target.checked) {
                                setBrands((prev) => {
                                    return [...prev, e.target.name.toLocaleLowerCase()];
                                });
                            } else {
                                setBrands((prev) => {
                                    return [...prev].filter((brand) => {
                                        brand === e.target.name.toLocaleLowerCase();
                                    });
                                });
                            }
                        }}
                    />
                    <span className={styles.filter_brand_titles}>
                        {faBrand}
                    </span>
                </div>
                <span className={styles.filter_brand_titles}>
                    {enBrand}
                </span>
            </label>
            <Divider />
        </>
    );
};

export default Brand;
