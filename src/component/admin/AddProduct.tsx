import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAddProductMutation } from '../../product/product.service';

const AddProduct = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>('');
  const navigate = useNavigate();
  const [onAdd] = useAddProductMutation();

  const addProduct = () =>{
    const productNew = {
      name, price, image
    }
    onAdd(productNew)
    alert('thêm thành công !!!');
    navigate('/admin/product')
  }
  return (
    <div>
        <form>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text"   value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Image</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            
            <button type="button" onClick={addProduct} className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                Thêm mới
            </button>
        </form>
    </div>
  )
}

export default AddProduct