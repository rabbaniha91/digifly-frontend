import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { ColorRing } from "react-loader-spinner"
import getProducts from '../../redux/actions/productsAction'
import ProductTemplate from '../useful/ProductTemplate'
import classes from "../../assets/styles/responsive.module.css"
import styles from "./products.module.css"
import { RESET_ACTION } from '../../redux/slices'
import useScreenSize from '../../hooks/useScreenSize'

const Products = React.memo(({ mainCategory, subCategory }) => {
    const productsState = useSelector((state) => state?.products)
    const dispatch = useDispatch()
    const { isSM } = useScreenSize()

    const [products, setProducts] = useState([])
    const [reciveAll, setReciveAll] = useState(false)
    const [pageNum, setPageNum] = useState(1)
    const [pageLimit, setPageLimit] = useState(14)
    const [isFetching, setIsFetching] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const latestPageNum = useRef(pageNum);
    latestPageNum.current = pageNum;

    const controller = useRef(new AbortController());

    const fetchData = async () => {
        setIsFetching(true);
        controller.current.abort();
        controller.current = new AbortController();
        try {
            if (subCategory === "") {
                dispatch(getProducts({ mainCategory, pageNum: latestPageNum.current, pageLimit, signal: controller.current.signal }));
            }
        } catch (error) {
            //    
        }

    }

    useEffect(() => {
        setErrorMessage(productsState?.errorMessage)
    }, [productsState?.errorMessage])

    useEffect(() => {
        setProducts([...productsState?.info])
    }, [productsState?.info])



    useEffect(() => {
        if (!productsState?.hasNextPage && productsState?.info?.length > 0) {
            setReciveAll(true)
        }
    }, [productsState?.hasNextPage])

    useEffect(() => {
        return () => {
            dispatch({ type: RESET_ACTION })
        }
    }, [])

    useEffect(() => {
        if (productsState?.nextPage && !isFetching) {
            setPageNum(productsState?.nextPage)
        }
    }, [productsState?.nextPage, isFetching])


    const observerTarget = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    if (!reciveAll) {
                        fetchData();
                    }
                }
            },
            { threshold: 1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
            setIsFetching(false)
        };
    }, [observerTarget, fetchData, productsState?.hasNextPage]);


    return (
        <div className={`${!isSM ? styles.container : styles.mobile_container} ${classes.responsive}`}>
            {productsState.isLoading && (
                <div className={styles.loader}>
                    <ColorRing
                        visible={productsState?.isLoading}
                        height="80"
                        width="80"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#1d9af2', '#1d9af255', '#1d9af288', '#1d9af2aa', '#1d9af2ee']}
                    />
                </div>
            )}

            {products?.length > 0 && products?.map((product, index) => {
                return <ProductTemplate
                    title={product?.title}
                    id={product?._id}
                    offer={product?.offer}
                    price={product?.price}
                    cover={product?.cover}
                    timer={product?.timeOfOffer}
                    key={index}
                />
            })}

            <div ref={observerTarget}></div>



        </div>
    )
})


export default Products