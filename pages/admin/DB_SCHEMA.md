## Users (users)
- _id: ObjectId
- phone: string, unique
- name: string
- role: 'customer' | 'admin'
- addresses: [ { name, street, city, state, pincode, phone, default } ]
- wishlist: [productId]
- createdAt: date

## Products (products)
- _id
- name
- slug
- description
- sizes: ['S','M','L','XL']
- colors: ['black','white',...]
- priceINR: number
- images: [string]
- stock: number
- category: 'Shirts' | 'Pants'
- createdAt

## Orders (orders)
- _id
- user: userId
- items: [ { product, name, priceINR, size, color, qty } ]
- amountINR
- address: { name, street, city, state, pincode, phone }
- status
- razorpayOrderId
- razorpayPaymentId
- createdAt
