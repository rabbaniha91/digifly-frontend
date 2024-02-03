import React, { useEffect } from 'react'
import Header from '../components/header'
import { useParams } from 'react-router-dom'
import Products from '../components/products/Products'
import Footer from "../components/footer"
import BreadCrumb from '../components/products/BreadCrumb'

const ProductsPage = () => {
    const { main_category, sub_category = "" } = useParams()


    return (
        <div >
            <Header />
            <BreadCrumb />
            <Products mainCategory={main_category} subCategory={sub_category} />
            <Footer />
        </div>
    )
}

export default ProductsPage