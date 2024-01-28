import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import getProducts from '../../redux/actions/productsAction'
import ProductTemplate from '../useful/ProductTemplate'

const Products = React.memo(({ mainCategory, subCategory }) => {
    const productsState = useSelector((state) => state?.products)
    const dispatch = useDispatch()

    const [pageNum, setPageNum] = useState(1)
    const [pageLimit, setPageLimit] = useState(9)
    const [products, setproducts] = useState([])

    useEffect(() => {
        if (subCategory === "") {
            dispatch(getProducts({ mainCategory, pageNum, pageLimit }))
        }
        if (productsState?.info?.length > 0) {
            setproducts(productsState?.info)
        }
    }, [mainCategory, subCategory, pageNum, pageLimit])





    return (
        <>
            {products?.length > 0 && products?.map((product, index) => (
                <div key={product?._id}>
                    <ProductTemplate
                        title={product?.title}
                        id={product?._id}
                        offer={product?.offer}
                        price={product?.price}
                        cover={product?.cover}
                        timer={product?.timeOfOffer}
                    />
                </div>
            ))}
        </>
    )
})

export default Products