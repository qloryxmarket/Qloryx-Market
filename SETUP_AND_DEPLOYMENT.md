# Qloryx Market - Setup & Deployment Guide

## 📋 Project Overview

**Qloryx Market** is a fully functional e-commerce website built with React, featuring:
- 📱 Responsive design (mobile, tablet, desktop)
- 🛍️ Product catalog with 8 sample products
- 🛒 Shopping cart with persistent storage
- 💳 Checkout form with delivery options
- 📞 WhatsApp order integration
- 💰 Cash on Delivery (COD) only
- 🎨 Modern Shopify-like UI

---

## 🚀 Quick Start (5 minutes)

### Option 1: Deploy on Vercel (Recommended)

1. **Create a Vercel account** at [vercel.com](https://vercel.com)

2. **Create a new React project locally:**
   ```bash
   npx create-react-app qloryx-market
   cd qloryx-market
   ```

3. **Replace the content of `src/App.js`** with the code from `qloryx-market.jsx`

4. **Install Lucide Icons:**
   ```bash
   npm install lucide-react
   ```

5. **Start locally to test:**
   ```bash
   npm start
   ```

6. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/qloryx-market.git
   git push -u origin main
   ```

7. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live 🎉

### Option 2: Deploy on Netlify

1. **Create a Netlify account** at [netlify.com](https://netlify.com)

2. **Create the project locally:**
   ```bash
   npx create-react-app qloryx-market
   cd qloryx-market
   npm install lucide-react
   ```

3. **Replace `src/App.js`** with code from `qloryx-market.jsx`

4. **Build the project:**
   ```bash
   npm run build
   ```

5. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder
   - Or connect GitHub for auto-deployment

---

## 📦 Installation Instructions

### Prerequisites
- Node.js (v14 or higher) - [Download here](https://nodejs.org)
- NPM or Yarn package manager

### Step-by-Step Setup

1. **Create a new React app:**
   ```bash
   npx create-react-app qloryx-market
   cd qloryx-market
   ```

2. **Install dependencies:**
   ```bash
   npm install lucide-react
   ```

3. **Copy the code:**
   - Open `src/App.js`
   - Delete all content
   - Paste the code from `qloryx-market.jsx`

4. **Run locally:**
   ```bash
   npm start
   ```
   - Opens at http://localhost:3000

5. **Test the features:**
   - Add products to cart
   - View cart and checkout
   - Fill checkout form
   - Verify WhatsApp integration

---

## ⚙️ Configuration

### Update WhatsApp Number

Find this line in `qloryx-market.jsx`:
```javascript
const whatsappNumber = '213798765432'; // Replace with your WhatsApp number
```

Replace `213798765432` with your actual WhatsApp number (with country code):
- Algeria: `213` + number without first 0
- Example: 0798765432 → 213798765432

### Add/Edit Products

Find the `products` state and modify:
```javascript
const [products, setProducts] = useState([
  {
    id: 1,
    name: 'Product Name',
    description: 'Product Description',
    price: 5000, // in DZD
    image: '🏷️', // Use emoji or remove for custom images
    category: 'Category Name'
  },
  // Add more products...
]);
```

### Change Store Name
Search for "Qloryx Market" and replace with your store name:
- Header title
- Page meta tags
- Footer text

### Customize Colors
Main colors used:
- Primary: `#667eea` (Purple-Blue)
- Secondary: `#764ba2` (Purple)
- Accent: `#ff6b6b` (Red for delete)

Change in CSS/styled sections as needed.

### Add Wilayat (Provinces)
Edit the wilaya select dropdown to match your delivery areas:
```javascript
<select name="wilaya" ...>
  <option value="الجزائر">الجزائر</option>
  <option value="وهران">وهران</option>
  // Add more provinces...
</select>
```

---

## 🔧 Features Explanation

### 1. Homepage
- Hero section with store branding
- 8-product grid display
- Add to cart buttons
- Responsive layout

### 2. Shopping Cart
- View all items added
- Adjust quantities (+ -)
- Remove items
- Auto-calculate totals
- Cart persists on page refresh (localStorage)

### 3. Checkout
- Customer information form
- Delivery type selection (home/pickup)
- Wilaya (province) selection
- Full address input
- Order summary display

### 4. Order Processing
- WhatsApp integration
- Pre-filled order message
- Order confirmation modal
- Cart clears after order
- Auto-redirect to home

### 5. Payment Method
- Cash on Delivery (COD) only
- No online payment processing
- Order delivered via WhatsApp

---

## 📱 Responsive Design

The website automatically adapts to:
- **Desktop** (1200px+): Full grid, sidebar navigation
- **Tablet** (768px-1199px): 2-3 column layout
- **Mobile** (<768px): Single column, hamburger menu

---

## 🔒 Security Notes

- No payment information stored
- Orders sent via WhatsApp (encrypted)
- Cart stored locally in browser
- No backend/database required

---

## 🐛 Troubleshooting

### Issue: "Module not found: lucide-react"
**Solution:**
```bash
npm install lucide-react
npm start
```

### Issue: WhatsApp link not working
**Solution:**
- Ensure WhatsApp number is correct (with country code)
- Use format: `213XXXXXXXXX` for Algeria
- Test with your phone number first

### Issue: Cart not persisting
**Solution:**
- Check browser's localStorage is enabled
- Clear browser cache and try again
- Open DevTools > Application > LocalStorage

### Issue: Styles look broken
**Solution:**
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check console for CSS errors
- Ensure no conflicting global CSS

---

## 📊 Directory Structure

```
qloryx-market/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.js (Main component)
│   ├── index.js
│   └── index.css
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚢 Deployment Checklist

Before deploying to production:

- [ ] Update WhatsApp number with your actual contact
- [ ] Add all your products to the catalog
- [ ] Test checkout flow on mobile
- [ ] Verify WhatsApp message formatting
- [ ] Update store name/branding
- [ ] Set delivery provinces correctly
- [ ] Test in incognito mode (fresh session)
- [ ] Check mobile responsiveness
- [ ] Verify images/emojis display correctly
- [ ] Set environment variables if needed

---

## 💻 Environment Variables (Optional)

Create `.env` file in project root:
```
REACT_APP_WHATSAPP_NUMBER=213798765432
REACT_APP_STORE_NAME=Qloryx Market
```

Then access in code:
```javascript
const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
```

---

## 🎨 Customization Ideas

1. **Add Product Images**: Replace emojis with image URLs
2. **Custom Styling**: Modify color schemes
3. **Product Categories**: Add filtering/search
4. **Inventory System**: Track product stock
5. **Reviews/Ratings**: Add customer feedback
6. **Email Notifications**: Send order confirmations
7. **Analytics**: Track orders and sales
8. **Multiple Languages**: Add language switcher
9. **Coupon System**: Add discount codes
10. **Admin Dashboard**: Manage products and orders

---

## 📞 Support

### Common Questions

**Q: Can I use this for my real store?**
A: Yes! This is production-ready. Just update the WhatsApp number and products.

**Q: Can I add payment processing later?**
A: Yes, you can integrate Stripe, PayPal, or other payment gateways.

**Q: How many products can I add?**
A: Unlimited! Performance remains smooth with 100+ products.

**Q: Is the cart data secure?**
A: Cart is stored locally (not sent to any server). For production, add backend storage.

**Q: Can I export orders to Excel?**
A: Not built-in, but you can capture WhatsApp messages or add backend logging.

---

## 📄 License

This project is free to use for personal and commercial purposes.

---

## 🎯 Next Steps

1. **Deploy the website** using Vercel or Netlify
2. **Add your products** to the catalog
3. **Update contact information** (WhatsApp, address)
4. **Share your store link** with customers
5. **Monitor WhatsApp** for incoming orders

---

## 📈 Growth Tips

- Use high-quality product images
- Write compelling product descriptions
- Promote on social media
- Collect customer feedback
- Improve popular products
- Add seasonal promotions
- Build email list for updates

---

**Good luck with your e-commerce store! 🚀**

Questions? Review the code comments for more details.
