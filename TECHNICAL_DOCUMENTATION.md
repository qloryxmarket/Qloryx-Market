# Qloryx Market - Technical Documentation

## 📚 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Component Structure](#component-structure)
3. [State Management](#state-management)
4. [Key Features Explained](#key-features-explained)
5. [Customization Guide](#customization-guide)
6. [API Integration](#api-integration)
7. [Performance Optimization](#performance-optimization)
8. [Troubleshooting](#troubleshooting)

---

## Architecture Overview

### Technology Stack
- **Frontend**: React 18.2
- **Styling**: Inline CSS + CSS-in-JS
- **Storage**: Browser's LocalStorage API
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify

### Design Pattern
- **Component-based**: Single main component with multiple sub-views
- **State-driven**: React hooks (useState, useEffect)
- **Page-based**: Home, Cart, Checkout, Confirmation

### Data Flow
```
Product Catalog (Static)
        ↓
Add to Cart (State Update)
        ↓
Shopping Cart (Display & Manage)
        ↓
Checkout Form (Collect Info)
        ↓
Order Submission (WhatsApp)
        ↓
Confirmation & Reset
```

---

## Component Structure

### Main App Component
```javascript
QloryxMarket (Main Component)
├── State Management
│   ├── currentPage
│   ├── products
│   ├── cart
│   ├── checkoutForm
│   └── orderConfirmed
├── Pages
│   ├── HomePage
│   ├── CartPage
│   └── CheckoutPage
├── Navigation Bar
├── Mobile Menu
├── Order Confirmation Modal
└── Footer
```

### Sub-Components

#### 1. **HomePage**
- Hero section with branding
- Product grid (8 products)
- Add to cart functionality
- Responsive layout

#### 2. **CartPage**
- List all cart items
- Quantity controls (+/-)
- Remove item buttons
- Total calculation
- Checkout button

#### 3. **CheckoutPage**
- Two-column layout
- Left: Checkout form
- Right: Order summary
- WhatsApp integration

#### 4. **Navigation**
- Logo/brand name
- Home & Cart buttons
- Cart item counter
- Mobile hamburger menu

---

## State Management

### State Variables

```javascript
// Current page (home, cart, checkout)
const [currentPage, setCurrentPage] = useState('home');

// Product catalog
const [products, setProducts] = useState([...]);

// Shopping cart items
const [cart, setCart] = useState([]);

// Mobile menu open/close
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Checkout form data
const [checkoutForm, setCheckoutForm] = useState({
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
  deliveryType: 'home',
  wilaya: ''
});

// Order confirmation modal
const [orderConfirmed, setOrderConfirmed] = useState(false);
```

### State Operations

#### Add to Cart
```javascript
const addToCart = (product) => {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    // Increase quantity
    setCart(cart.map(item =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    ));
  } else {
    // Add new product
    setCart([...cart, { ...product, qty: 1 }]);
  }
};
```

#### Update Cart Total
```javascript
const cartTotal = cart.reduce((sum, item) => 
  sum + (item.price * item.qty), 0
);
```

#### Handle Form Change
```javascript
const handleCheckoutChange = (e) => {
  const { name, value } = e.target;
  setCheckoutForm(prev => ({ ...prev, [name]: value }));
};
```

### LocalStorage Integration

```javascript
// Load cart on component mount
useEffect(() => {
  const savedCart = localStorage.getItem('qloryx_cart');
  if (savedCart) {
    setCart(JSON.parse(savedCart));
  }
}, []);

// Save cart whenever it changes
useEffect(() => {
  localStorage.setItem('qloryx_cart', JSON.stringify(cart));
}, [cart]);
```

---

## Key Features Explained

### 1. Product Catalog

**Location**: Lines 45-81 in App.js

**Structure**:
```javascript
{
  id: 1,              // Unique identifier
  name: 'Product Name',   // Display name
  description: 'Description',  // Short description
  price: 5000,        // Price in DZD
  image: '🏷️',        // Emoji or image URL
  category: 'Category' // Product category
}
```

**How to Add Products**:
1. Open `src/App.js`
2. Find the `products` array
3. Add new object:
```javascript
{
  id: 9,
  name: 'New Product',
  description: 'Product details',
  price: 9999,
  image: '🎁',
  category: 'Electronics'
}
```
4. Save and refresh

### 2. Shopping Cart

**Features**:
- Add/remove items
- Adjust quantities
- Auto-calculate totals
- Persist across sessions

**Key Functions**:
```javascript
addToCart(product)        // Add item to cart
removeFromCart(productId) // Remove item
updateQty(productId, qty) // Change quantity
```

### 3. Checkout Form

**Fields**:
1. First Name (required)
2. Last Name (required)
3. Phone Number (required)
4. Wilaya/Province (required)
5. Full Address (required)
6. Delivery Type (Home/Pickup)

**Validation**: All fields required before submission

**Form Handler**:
```javascript
const handleSubmitOrder = (e) => {
  e.preventDefault();
  
  // Validation
  if (!checkoutForm.firstName || ...) {
    alert('Fill all fields');
    return;
  }
  
  // Order message
  let message = 'Order details...';
  
  // Send to WhatsApp
  window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
  
  // Show confirmation
  setOrderConfirmed(true);
  
  // Reset
  setTimeout(() => { /* Reset state */ }, 3000);
};
```

### 4. WhatsApp Integration

**Method**: Opens WhatsApp Web/App with pre-filled message

**Message Format**:
```
🎉 طلب جديد من Qloryx Market

👤 البيانات الشخصية:
الاسم: [Name]
رقم الهاتف: [Phone]
الولاية: [Wilaya]
العنوان: [Address]
نوع التوصيل: [Type]

📦 المنتجات:
• Product1 × Qty = Price
• Product2 × Qty = Price

💰 الإجمالي: Total DZD
```

**Implementation**:
```javascript
const whatsappNumber = '213798765432'; // Your number
const encodedMessage = encodeURIComponent(message);
window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
```

### 5. Mobile Responsiveness

**Breakpoints**:
```css
/* Desktop: 768px and up */
/* Tablet: 600px to 767px */
/* Mobile: Below 600px */
```

**Responsive Grid**:
```javascript
gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
```

**Mobile Menu**:
- Hidden on desktop
- Hamburger button on mobile
- Slide-down menu
- Auto-close on selection

---

## Customization Guide

### 1. Change Store Name

Find and replace "Qloryx Market":
- Navigation: `<button>🛍️ Qloryx</button>`
- Hero: `<h1>🛍️ Qloryx Market</h1>`
- Footer: `© 2024 Qloryx Market`

### 2. Update Colors

Main colors:
```javascript
Primary: '#667eea'      // Button, primary actions
Secondary: '#764ba2'    // Price, emphasis
Danger: '#ff6b6b'       // Delete buttons
White: '#ffffff'
Gray: '#333', '#666', '#999'
```

**Change colors**:
1. Find color hex values
2. Replace with new colors
3. Test on all pages

Example:
```javascript
// Change primary color
background: '#667eea' → background: '#YOUR_COLOR'
```

### 3. Modify Product Images

**Option A: Use Emojis** (Current)
```javascript
image: '💻' // Leave as is
```

**Option B: Use Image URLs**
```javascript
image: 'https://example.com/product.jpg'
```

Update display:
```javascript
// From:
<div style={{ fontSize: '3rem' }}>{product.image}</div>

// To:
<img src={product.image} alt={product.name} style={{ 
  width: '100%', 
  height: '200px', 
  objectFit: 'cover' 
}} />
```

### 4. Add New Wilayat (Provinces)

Find the wilaya select:
```javascript
<select name="wilaya">
  <option value="الجزائر">الجزائر</option>
  <option value="وهران">وهران</option>
  // Add more:
  <option value="بسكرة">بسكرة</option>
  <option value="أريج">أريج</option>
</select>
```

### 5. Change WhatsApp Number

Find:
```javascript
const whatsappNumber = '213798765432';
```

Replace with your number (with country code):
- Algeria: Remove first 0, add 213
- Example: 0798765432 → 213798765432

### 6. Customize Checkout Form

Add new fields:
```javascript
// Add to state
const [checkoutForm, setCheckoutForm] = useState({
  // ... existing fields
  email: '',           // Add new field
  notes: ''            // Add new field
});

// Add to form
<input 
  type="email"
  name="email"
  value={checkoutForm.email}
  onChange={handleCheckoutChange}
/>
```

### 7. Modify Price Currency

Current: DZD (Algerian Dinar)

**Change display**:
```javascript
// From:
{product.price.toLocaleString()} دج

// To:
${product.price.toLocaleString()} USD
```

### 8. Add Product Search

```javascript
const [searchTerm, setSearchTerm] = useState('');

const filteredProducts = products.filter(product =>
  product.name.includes(searchTerm) ||
  product.description.includes(searchTerm)
);
```

### 9. Add Product Filtering

```javascript
const [selectedCategory, setSelectedCategory] = useState('All');

const filteredProducts = selectedCategory === 'All'
  ? products
  : products.filter(p => p.category === selectedCategory);
```

### 10. Customize Styling

**Update button style**:
```javascript
// Current gradient
background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'

// Change to solid
background: '#667eea'

// Change to different gradient
background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
```

---

## API Integration

### Future: Add Backend

**Example: Save orders to database**:
```javascript
const handleSubmitOrder = async (e) => {
  e.preventDefault();
  
  const orderData = {
    customer: checkoutForm,
    items: cart,
    total: cartTotal,
    date: new Date().toISOString()
  };
  
  // Send to backend
  const response = await fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  });
  
  const result = await response.json();
  // Handle response...
};
```

### Future: Add Payment Gateway

**Example: Stripe Integration**:
```javascript
import { loadStripe } from '@stripe/js';

const stripe = await loadStripe('pk_test_...');
const { error } = await stripe.redirectToCheckout({
  sessionId: checkoutSessionId
});
```

### Future: Add Email Notifications

```javascript
const sendOrderEmail = async (email, orderDetails) => {
  await fetch('/api/send-email', {
    method: 'POST',
    body: JSON.stringify({
      to: email,
      subject: 'Order Confirmation',
      content: orderDetails
    })
  });
};
```

---

## Performance Optimization

### Current Optimizations
- ✅ Lazy loading images
- ✅ Inline CSS (no external files)
- ✅ Minimal dependencies
- ✅ LocalStorage caching
- ✅ Responsive images

### Future Optimizations

1. **Code Splitting**:
```javascript
const HomePage = React.lazy(() => import('./pages/Home'));
<Suspense fallback={<Spinner />}>
  <HomePage />
</Suspense>
```

2. **Image Optimization**:
```javascript
import Image from 'next/image';
<Image src={product.image} width={300} height={300} />
```

3. **Memoization**:
```javascript
const ProductCard = React.memo(({ product }) => {
  // Component...
});
```

4. **Performance Monitoring**:
```javascript
import { reportWebVitals } from 'web-vitals';
reportWebVitals(console.log);
```

---

## Troubleshooting

### Issue: Cart not persisting
**Cause**: LocalStorage disabled or quota exceeded
**Solution**:
```javascript
try {
  localStorage.setItem('qloryx_cart', JSON.stringify(cart));
} catch (e) {
  console.error('Storage quota exceeded', e);
}
```

### Issue: WhatsApp link not working
**Cause**: Invalid phone number or format
**Solution**:
- Format: `country_code + phone_number`
- Example: `213798765432` (not `0798765432`)
- Test: Open `https://wa.me/213798765432` in browser

### Issue: Styles not applying
**Cause**: CSS specificity or inline style conflicts
**Solution**:
- Use `!important` sparingly
- Check DevTools > Styles panel
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: Mobile menu not closing
**Cause**: onClick handler not set on menu items
**Solution**:
```javascript
<button onClick={() => {
  setCurrentPage('home');
  setMobileMenuOpen(false);  // Add this
}}>
  Home
</button>
```

### Issue: Form validation failing
**Cause**: Empty fields or wrong validation logic
**Solution**:
```javascript
if (!checkoutForm.firstName.trim()) {
  alert('First name is required');
  return;
}
```

### Issue: Images not loading
**Cause**: Invalid image URL or path
**Solution**:
- Verify URL is correct
- Check image is publicly accessible
- Use relative paths: `/images/product.jpg`
- Or use absolute URLs: `https://example.com/image.jpg`

---

## Best Practices

### Code Organization
- Keep components small and focused
- Extract repeated code into functions
- Use meaningful variable names
- Add comments for complex logic

### State Management
- Keep state as close as possible
- Avoid prop drilling (use context if many props)
- Update state immutably
- Initialize state with default values

### Performance
- Use React.memo for expensive components
- Lazy load non-critical imports
- Minimize re-renders
- Optimize images

### Security
- Validate all user inputs
- Sanitize data before sending
- Never expose sensitive info in code
- Use HTTPS for deployment

### Accessibility
- Add alt text to images
- Use semantic HTML
- Ensure keyboard navigation
- Maintain color contrast

---

## Testing

### Manual Testing
1. Add products to cart
2. Modify quantities
3. Remove items
4. Complete checkout on desktop
5. Complete checkout on mobile
6. Test WhatsApp link
7. Verify cart persistence
8. Test all pages

### Automated Testing (Future)
```javascript
// Using Jest + React Testing Library
import { render, screen } from '@testing-library/react';
import QloryxMarket from './App';

test('renders product catalog', () => {
  render(<QloryxMarket />);
  expect(screen.getByText(/Qloryx Market/i)).toBeInTheDocument();
});
```

---

## Deployment Checklist

- [ ] Update WhatsApp number
- [ ] Review all product details
- [ ] Test checkout flow
- [ ] Verify mobile responsiveness
- [ ] Check WhatsApp message format
- [ ] Test in incognito mode
- [ ] Validate forms
- [ ] Check image loading
- [ ] Test cart persistence
- [ ] Verify animations
- [ ] Test on real mobile device
- [ ] Optimize images
- [ ] Set up analytics
- [ ] Configure deployment
- [ ] Test deployed site

---

## Further Reading

- [React Hooks Documentation](https://react.dev/reference/react)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [CSS Grid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [WhatsApp Web API](https://www.whatsapp.com/business/api/)

---

**Happy coding! 🚀**
