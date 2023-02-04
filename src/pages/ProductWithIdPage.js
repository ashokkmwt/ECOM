import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductWithId from '../components/ProductWithId/ProductWithId'
import { useProductContext } from '../context/productContext'

const ProductWithIdPage = () => {

    const { id } = useParams();

    const { getSingleProduct, singleProduct, isSingleLoading } = useProductContext();

    useEffect(() => {
        getSingleProduct(id);
    }, [])

    return (
        <ProductWithId singleProduct={singleProduct} isSingleLoading={isSingleLoading} />
    )
}

export default ProductWithIdPage