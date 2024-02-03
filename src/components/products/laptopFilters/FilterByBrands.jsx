import React, { useMemo, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

import Brand from "./Brands";
import { laptopBrands } from "../../../data/data";
import styles from "../filter.module.css"


const FilterByBrand = ({open}) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [brands, setBrands] = useState("")

  const filteredBrands = useMemo(() => {
    let isPersian = /^[\u0600-\u06FF\s]+$/;
    let isEnglish = /^[A-Za-z\s]+$/;

    return laptopBrands.filter((brand) => {
      if (isEnglish.test(searchTerm)) {
        return (
          brand.enBrand.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1
        );
      } else if (isPersian.test(searchTerm)) {
        return brand.faBrand.indexOf(searchTerm) > -1;
      } else if (searchTerm === "") {
        return true;
      }
    });
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className={`${styles.filter_brand_container} ${open ? styles.open : styles.close}`}>
      <div className={styles.filter_brand_search_section}>
        <input
          type="text"
          placeholder="جستجو"
          className={styles.search_input}
          onChange={(e) => handleSearch(e)}
        />
        <HiMagnifyingGlass size={26} className={styles.magnify} />
      </div>
      <ul
        className={styles.brands_container}
      >
        {filteredBrands.map((brand) => (
          <li key={brand.enBrand}>
            <Brand faBrand={brand.faBrand} enBrand={brand.enBrand} setBrands={setBrands}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByBrand;
