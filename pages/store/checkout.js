import { useState } from 'react';
import API from '../../utils/api';
import Router from 'next/router';

export default function Checkout(){
  const cart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart') || '[]') : [];
  const [address, setAddress] = useState({ name:'', street:'', city:'', state:'', pincode:'', phone:'' });

  const placeOrder = async () => {
    try{
      const res = await API.post('/orders/create',{ items: cart, address });
      const { razorpay } = res.data;
      // Frontend Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: razorpay.amount,
        currency: razorpay.currency,
        name: "The MRP Store",
        description: "Order payment",
        order_id: razorpay.id,
        handler: async function (response){
          await API.post('/orders/confirm',{ orderId: res.data.order._id, razorpayPaymentId: response.razorpay_payment_id });
          localStorage.removeItem('cart');
          Router.push('/store/order-confirmation');
        },
        prefill: { name: address.name, contact: address.phone }
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    }catch(e){ alert(e?.response?.data?.message || 'Error creating order'); }
  };

  return (
    <div style={{padding:20}}>
      <h2>Checkout</h2>
      <div>
        <input placeholder="Name" value={address.name} onChange={e=>setAddress({...address,name:e.target.value})} />
        <input placeholder="Phone" value={address.phone} onChange={e=>setAddress({...address,phone:e.target.value})} />
        <input placeholder="Street" value={address.street} onChange={e=>setAddress({...address,street:e.target.value})} />
        <input placeholder="City" value={address.city} onChange={e=>setAddress({...address,city:e.target.value})} />
        <input placeholder="State" value={address.state} onChange={e=>setAddress({...address,state:e.target.value})} />
        <input placeholder="Pincode" value={address.pincode} onChange={e=>setAddress({...address,pincode:e.target.value})} />
      </div>
      <h3>Total: ₹{cart.reduce((s,i)=> s + i.priceINR * i.qty,0)}</h3>
      <button onClick={placeOrder}>Pay with Razorpay / UPI</button>
    </div>
  );
}
