import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'


const products = [
    { id: 0, name: 'product_00', price: 100 },
    { id: 1, name: 'product_01', price: 110 },
    { id: 2, name: 'product_02', price: 120 },
    { id: 3, name: 'product_03', price: 130 },
    { id: 4, name: 'product_04', price: 140 },
    { id: 5, name: 'product_05', price: 150 }
]

const Product = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h2 className='text-center text-2xl underline font-semibold'>Products</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Product Name</th>
                        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Price</th>
                        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{product.name}</td>
                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{product.price}</td>
                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                                <button onClick={() => dispatch(addToCart(product))} className='bg-green-400 text-white font-bold p-2 rounded-full'>Add to Cart</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Product