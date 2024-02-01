import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Grid } from "react-loader-spinner"
import getProducts from '../../redux/actions/productsAction'
import ProductTemplate from '../useful/ProductTemplate'
import classes from "../../assets/styles/responsive.module.css"
import styles from "./products.module.css"
import { RESET_ACTION } from '../../redux/slices'

const Products = React.memo(({ mainCategory, subCategory }) => {
    const productsState = useSelector((state) => state?.products)
    const dispatch = useDispatch()
    const [reciveAll, setReciveAll] = useState(false)

    const [pageNum, setPageNum] = useState(1)
    const [pageLimit, setPageLimit] = useState(14)
    const [isFetching, setIsFetching] = useState(false)

    const latestPageNum = useRef(pageNum);
    latestPageNum.current = pageNum;

    const controller = useRef(new AbortController());

    const fetchData = async () => {
        setIsFetching(true);
        controller.current.abort();
        controller.current = new AbortController();
        dispatch(getProducts({ mainCategory, pageNum: latestPageNum.current, pageLimit, signal: controller.current.signal }));
    }



    useEffect(() => {
        if (!productsState?.hasNextPage && productsState?.info?.length > 0) {
            setReciveAll(true)
        }
    }, [productsState?.hasNextPage])

    useEffect(() => {
        console.log(reciveAll)
    }, [reciveAll])

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
        <div className={`${classes.responsive} ${productsState?.isLoading ? styles.loader : styles.container}`}>
            {productsState.isLoading && (
                <Grid
                    visible={true}
                    height="80"
                    width="80"
                    color="var(--second-main-bg)"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass="grid-wrapper"
                />
            )}

            {productsState?.info?.length > 0 && productsState?.info?.map((product, index) => {
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