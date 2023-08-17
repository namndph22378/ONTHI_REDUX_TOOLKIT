import React from 'react'
import { useGetProductListQuery } from '../product/product.service'
import { IProduct } from '../product/product.interface';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const {data: productList} = useGetProductListQuery(null);
  const productMap = productList as IProduct[] || []
  return (
    <div>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to={`/admin/product`}>Quản lí admin</Link>
      </button>
      {productMap.map(product =>{
        return <tr key={product.id}>
            <h2><Link to={`/product/${product.id}`}>{product.name}</Link></h2>
            <img src={product.image} alt="" />
            <p>{product.price}</p>
        </tr>
      })}
    </div>
  )
}

export default HomePage