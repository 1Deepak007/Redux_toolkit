import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart, updateQuantity } from '../features/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Select state
  const dispatch = useDispatch(); // Dispatch action

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold underline">Cart</h1>
      {cart.items.length === 0 ? (
        <h2 className="text-center">Your cart is empty</h2>
      ) : (
        <>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Product ID</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Product Name</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Per Unit Price</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Quantity</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Total for Units</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item.id}>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.id}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.name}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.price}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        // Ensure the value is a valid number and greater than or equal to 1
                        if (!isNaN(value) && value >= 1) {
                          dispatch(updateQuantity({ id: item.id, quantity: value }));
                        }
                      }}
                      min="1"
                    />
                  </td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.price * item.quantity}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="bg-red-500 p-2 text-white rounded-full"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <div className="col">
              <span>Total Payable: {cart.payableAmount}</span>
            </div>
            <div className="col">
              <span>
                <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
              </span>
            </div>
          </div>
        </>
      )}
      <hr className="mb-4 text-black"/>
    </div>
  );
};

export default Cart;