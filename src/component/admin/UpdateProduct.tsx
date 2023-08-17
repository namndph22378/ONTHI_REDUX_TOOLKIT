import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductListQuery, useUpdateProductMutation } from '../../product/product.service';
import { IProduct } from '../../product/product.interface';

const UpdateProduct = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>('');
  const navigate = useNavigate();
  const [onUpdate] = useUpdateProductMutation();
  const { data: productList } = useGetProductListQuery(null);

  const [id, setId] = useState<number | null>(null);
  const paramId = useParams<{ id: string }>();
  useEffect(() => {
    if (paramId.id && productList) {
      const productId = productList.find((product: IProduct) => product.id === Number(paramId.id));
      if (productId) {
          setId(productId.id);
          setName(productId.name);
          setPrice(productId.price);
          setImage(productId.image);
      }
    }
  },[paramId.id])


  const updateProduct = () => {
    if(id !== null){
      const productNew = {
       id, name, price, image
      }
      onUpdate(productNew)
      alert('Update thành công !!!');
      navigate('/admin/product')
    }
  
  }
  return (
    <div>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>

        <button type="button" onClick={updateProduct} className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          Thêm mới
        </button>
      </form>
    </div>
  )
}

export default UpdateProduct