import React from 'react'
import { IProduct } from '../../product/product.interface';
import { useDeleteProductMutation, useGetProductListQuery } from '../../product/product.service';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { data: productList } = useGetProductListQuery(null);
  const productMap = productList as IProduct[] || [];

  const [onDelete] = useDeleteProductMutation();
  const confrimDelete = (product: IProduct)=>{
    const result = window.confirm("bạn có muốn xóa không ???")
    if(result){
      onDelete(product)
    }
  }
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to={`/admin/product/add`}>Thêm mới</Link>
      </button>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Id
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>

            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {productMap.map(product => {
            return <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                  <img src={product.image} alt="" />
              </td>

              <td className="px-6 py-4 whitespace-nowrap">

                <button onClick={() =>confrimDelete(product)} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Xóa
                </button>
                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link to={`/admin/product/update/${product.id}`}>Sửa</Link>

                </button>
              </td>
            </tr>
          })}

        </tbody>
      </table>



    </div>
  )
}

export default ProductList