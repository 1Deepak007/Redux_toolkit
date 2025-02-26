import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/productSlice';


const D_Mart = () => {

    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    if(status === 'loading') {
        return <h2>Loading...</h2>
    }

    if(status === 'failed') {
        return <h2>Error : {error}</h2>
    }

    return (
        <div>
            <h1 className="text-center text-2xl font-semibold underline">D-Mart</h1>
            <div className="flex flex-wrap justify-center">
                {items.map((product) => (
                    <div key={product.id} className="w-1/4 p-4">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                <p className="text-gray-600">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default D_Mart
