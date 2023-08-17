import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAddUserMutation } from '../product/product.service';

const Signup = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const navigate = useNavigate();
  const [onAdd] = useAddUserMutation();

  const addUser = () =>{
    const userNew = {
      name, password,confirmPassword
    }
    onAdd(userNew)
    alert('thêm user thành công !!!');
    // navigate('/admin/product')
  }
  return (
    <div>
        <form>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text"   value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">password</label>
                <input type="tesxt" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">confirmPassword</label>
                <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            
            <button type="button" onClick={addUser} className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                Thêm mới User
            </button>
        </form>
    </div>
  )
}

export default Signup