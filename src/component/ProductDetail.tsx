import React from 'react'
import { useGetProductListQuery } from '../product/product.service';
import { useParams } from 'react-router-dom';
import { IProduct } from '../product/product.interface';

const ProductDetail = () => {
  const { data: productList } = useGetProductListQuery(null);

  const paramId = useParams<{ id: string }>();
  const productId = productList.find((product: IProduct) => product.id === Number(paramId.id))
  return (
    <div>

      <h2>{productId.name}</h2>
      <img src={productId.image} alt="" />
      <p>{productId.price}</p>
    </div>
  )
}

export default ProductDetail