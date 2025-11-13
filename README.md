# The MRP Store — Frontend (Next.js)

This is the frontend-only scaffold for The MRP Store (minimal, premium e-commerce UI).
It uses Next.js + simple CSS, placeholder images, and a mock OTP/store flow.

## Setup
1. cd frontend
2. npm install
3. npm run dev
4. Open http://localhost:3000

## Features implemented (frontend-only)
- Landing page with hero, categories, features, CTA
- Gated entry (enter WhatsApp number → OTP mock)
- Store catalog (placeholder products)
- Product detail page (image + sizes + add to cart - localStorage)
- Cart page (localStorage)
- Policy static pages
- Floating WhatsApp support button
- Responsive layout
- SEO meta tags and NProgress loading bar

## Where to plug backend later
- API base: `utils/api.js` (set `NEXT_PUBLIC_API_URL` in `.env.local`)
- Send OTP: `POST /auth/send-otp`
- Verify OTP: `POST /auth/verify-otp` -> returns token stored in `localStorage`
- Catalog & product endpoints: `GET /products`, `GET /products/:id`
- Orders & checkout: integrate Razorpay flow on checkout page

## Notes
- Images are from Unsplash for placeholder only; replace with your assets or CDN.
- Styling is intentionally minimal and modular; expand the CSS into Tailwind or component library later.
