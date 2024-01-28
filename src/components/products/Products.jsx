import React, { useEffect, useMemo, useState } from 'react'
import { getProducts } from '../../utilities/utilities'

const Products = React.memo(({ mainCategory, subCategory }) => {
    const [pageNum, setPageNum] = useState(1)
    const [pageLimit, setPageLimit] = useState(9)
    useEffect(() => {
        if (subCategory === "") {
            getProducts(mainCategory, pageNum, pageLimit)
        }
    }, [mainCategory, subCategory, pageNum, pageLimit])
    return (
        <div>Products</div>
    )
})

export default Products