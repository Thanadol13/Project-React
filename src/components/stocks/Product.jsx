import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [name, setname] = useState("")
    const [qty, setQty] = useState(0)
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")

    const [data, setData] = useState([])

    const addProduct = async () => {
        try {

            const url = "https://workshop-react-api.vercel.app/Product"
            const user_id = localStorage.getItem('user_id')

            const res = await axios.post(url, { name, qty, price, image, user_id })
            fetchData()
        } catch (error) {
            console.log(error);

        }

    }

    const deletProduct = async(id)=>{
        try{
            const url = `https://workshop-react-api.vercel.app/Product/${id}`
            const res = await axios.delete(url)
            fetchData()
        }catch (error){
            console.log(error);
        }
    }

    const fetchData = async () => {
        try {
            const user_id = localStorage.getItem('user_id')
            const url = `https://workshop-react-api.vercel.app/Product?user_id=${user_id}`

            const res = await axios.get(url)
            console.log(res.data)
            setData(res.data)

        } catch (error) {
            console.log(error);

        }
    }

    
    useEffect(() => { fetchData() }, [])



    return (
        <div>
            name  : {name}  <br />
            qty   : {qty}   <br />
            price : {price} <br />
            image : {image} <br />
            <div>
                <div className=' bg-purple-400 rounded-lg shadow-lg'>
                    <input placeholder='ชื่อสินค้า' className='border border-gray-100 py-2 m-3' type="text" name="name" onChange={(e) => setname(e.target.value)} />
                    <input placeholder='จำนวน' className='border border-gray-100 py-2 m-3' type="number" name="name" onChange={(e) => setQty(e.target.value)} />
                    <input placeholder='ราคา' className='border border-gray-100 py-2 m-3' type="number" name="name" onChange={(e) => setPrice(e.target.value)} />
                    <input placeholder='รูปภาพ' className='border border-gray-100 py-2 m-3' type="text" name="name" onChange={(e) => setImage(e.target.value)} />
                    <button className=' bg-green-600 text-white py-2 px-4' onClick={addProduct}>บันทึก</button>
                </div>



                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delete Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className='w-150' src={item.image} alt="" />
                                    </td>

                                    <td className="px-6 py-4">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.qty}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.price}
                                    </td>

                                    <td>
                                        <button className=' bg-red-500 text-white rounded px-5 py-2 m-2' onClick={() => deletProduct(item.id)}>ลบ</button>
                                        <button className=' bg-yellow-400 text-white rounded px-5 py-2 m-2'>แก้ไข</button>
                                    </td>
                                </tr>
                            ))}

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                                <td>
                                    <button className=' bg-red-500 text-white rounded px-5 py-2 m-2'>ลบ</button>
                                    <button className=' bg-yellow-400 text-white rounded px-5 py-2 m-2'>แก้ไข</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>


            </div>


        </div>
    )
}

export default Product