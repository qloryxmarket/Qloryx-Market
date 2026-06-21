# 🚀 Qloryx Market - Quick Setup Checklist

## ⏱️ Time Required: 15-30 minutes

Follow these steps in order to get your store live!

---

## ✅ Phase 1: Local Setup (5 minutes)

### Step 1: Download Node.js
- [ ] Go to https://nodejs.org
- [ ] Download LTS version
- [ ] Install with default settings
- [ ] Verify: Open terminal and run `node --version`

### Step 2: Clone/Download Project
- [ ] Download project files
- [ ] Extract to a folder (e.g., `qloryx-market`)
- [ ] Open terminal in that folder

### Step 3: Install Dependencies
```bash
npm install
```
- [ ] Wait for installation to complete (2-3 minutes)

### Step 4: Run Locally
```bash
npm start
```
- [ ] Browser opens at http://localhost:3000
- [ ] Test adding products to cart
- [ ] Test checkout flow

---

## ✅ Phase 2: Customize (5 minutes)

### Step 5: Update WhatsApp Number
- [ ] Open `src/App.js`
- [ ] Find: `const whatsappNumber = '213798765432'`
- [ ] Replace with your WhatsApp number
- [ ] Format: `country_code + phone_number` (no +)

### Step 6: Add Your Products
- [ ] Open `src/App.js`
- [ ] Find: `const [products, setProducts] = useState([`
- [ ] Add new products or edit existing ones
- [ ] Fill in: id, name, description, price, image, category

### Step 7: Update Store Name
- [ ] Search for "Qloryx Market"
- [ ] Replace with your store name in:
  - [ ] Navigation title
  - [ ] Hero section
  - [ ] Footer
  - [ ] Page title

### Step 8: Customize Colors (Optional)
- [ ] Find color values (e.g., `#667eea`)
- [ ] Replace with your brand colors
- [ ] Refresh to see changes

### Step 9: Test Everything Locally
- [ ] Add products to cart
- [ ] Verify quantities update
- [ ] Remove items
- [ ] Complete checkout form
- [ ] Send test WhatsApp message
- [ ] Refresh page and verify cart persists

---

## ✅ Phase 3: Deploy to Vercel (3 minutes)

### Option A: Deploy on Vercel (Easiest)

#### Step 10: Create GitHub Account
- [ ] Go to https://github.com
- [ ] Sign up or log in
- [ ] Create new repository named `qloryx-market`

#### Step 11: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/qloryx-market.git
git push -u origin main
```
- [ ] Code pushed to GitHub

#### Step 12: Deploy on Vercel
- [ ] Go to https://vercel.com
- [ ] Click "New Project"
- [ ] Select "Import Git Repository"
- [ ] Choose your GitHub repository
- [ ] Click "Deploy"
- [ ] Wait 2-3 minutes
- [ ] Get your live URL

### Option B: Deploy on Netlify (Alternative)

#### Step 10: Build Project
```bash
npm run build
```
- [ ] Build folder created

#### Step 11: Deploy on Netlify
- [ ] Go to https://netlify.com
- [ ] Sign up with GitHub
- [ ] Drag and drop `build` folder
- [ ] Get your live URL

---

## ✅ Phase 4: Final Testing (5 minutes)

### Step 13: Test Live Website
- [ ] Open your live URL
- [ ] Test on desktop browser
- [ ] Test on mobile device
- [ ] Add products to cart
- [ ] Complete checkout
- [ ] Verify WhatsApp message arrives
- [ ] Check cart persistence

### Step 14: Mobile Testing
- [ ] Hamburger menu works
- [ ] Products display correctly
- [ ] Buttons are clickable
- [ ] Form fields are accessible
- [ ] Images load properly

### Step 15: WhatsApp Testing
- [ ] Send test order
- [ ] Verify message format
- [ ] Check all details included
- [ ] Message is readable

---

## ✅ Phase 5: Share & Promote (Optional)

### Step 16: Share Your Store
- [ ] Copy your live URL
- [ ] Share on WhatsApp
- [ ] Share on Facebook
- [ ] Share on Instagram
- [ ] Share with friends/family

### Step 17: Monitor Orders
- [ ] Keep WhatsApp open
- [ ] Respond to order messages
- [ ] Confirm delivery address
- [ ] Arrange payment (COD)
- [ ] Confirm delivery

---

## 🎯 Pre-Launch Checklist

Before sharing your store publicly:

### Technical
- [ ] Website loads fast (< 2 seconds)
- [ ] Mobile responsive
- [ ] All images display
- [ ] WhatsApp link works
- [ ] Cart saves items
- [ ] Checkout form validates
- [ ] No console errors

### Content
- [ ] All products have images
- [ ] All prices are correct
- [ ] All descriptions are clear
- [ ] Store name is set
- [ ] Contact info is accurate
- [ ] Delivery areas listed

### Settings
- [ ] WhatsApp number correct
- [ ] Wilayat (provinces) added
- [ ] Delivery options set
- [ ] Form fields complete
- [ ] Colors match brand
- [ ] Logo/branding set

### Legal (Optional)
- [ ] Privacy policy ready
- [ ] Terms & conditions ready
- [ ] Return policy set
- [ ] Delivery policy clear

---

## 🆘 Troubleshooting Quick Fixes

### Issue: npm command not found
**Fix**: Reinstall Node.js, restart terminal

### Issue: Website won't start
**Fix**: 
```bash
npm install
npm start
```

### Issue: WhatsApp not opening
**Fix**: Verify number format (213798765432, no +)

### Issue: Styles look broken
**Fix**: Hard refresh (Ctrl+Shift+R)

### Issue: Cart not saving
**Fix**: Enable LocalStorage, check browser storage quota

### Issue: Deployment fails
**Fix**: 
- Check git is installed
- Verify GitHub connection
- Try deploying again

---

## 📊 Checklist Status

Track your progress:

```
Phase 1: Local Setup       [ ] Not Started  [ ] In Progress  [ ] Complete
Phase 2: Customize        [ ] Not Started  [ ] In Progress  [ ] Complete
Phase 3: Deploy           [ ] Not Started  [ ] In Progress  [ ] Complete
Phase 4: Testing          [ ] Not Started  [ ] In Progress  [ ] Complete
Phase 5: Launch           [ ] Not Started  [ ] In Progress  [ ] Complete
```

---

## 🎉 Success Markers

You know you're ready when:

✅ Website loads without errors
✅ Products display with images
✅ Add to cart works
✅ Cart totals calculate correctly
✅ Checkout form validates
✅ WhatsApp message sends
✅ Live URL is accessible
✅ Mobile version works
✅ Cart persists after refresh
✅ All navigation works

---

## 📞 Getting Help

If stuck at any step:

1. **Check SETUP_AND_DEPLOYMENT.md** - Detailed guide
2. **Check TECHNICAL_DOCUMENTATION.md** - How things work
3. **Check README.md** - Features and FAQs
4. **Review code comments** in qloryx-market.jsx
5. **Search Google** for specific error messages

---

## 💡 Pro Tips

1. **Test everything locally first** before deploying
2. **Keep WhatsApp open** to receive orders immediately
3. **Respond quickly** to customer messages
4. **Update products regularly** to keep store fresh
5. **Collect customer feedback** for improvements
6. **Monitor performance** using Vercel/Netlify analytics

---

## 🚀 Next Actions

After launch:

1. **Day 1**: Share with friends/family
2. **Week 1**: Post on social media
3. **Week 2**: Gather feedback
4. **Month 1**: Analyze sales data
5. **Month 2**: Add new products
6. **Month 3**: Expand marketing

---

## 📈 Growth Hacks

- Post product videos on TikTok
- Use Instagram reels
- Run WhatsApp groups
- Get customer reviews
- Offer bulk discounts
- Create seasonal promotions
- Add loyalty rewards
- Expand product range

---

## 🎓 Keep Learning

- React tutorials: react.dev
- JavaScript: javascript.info
- Web design: webflow.com
- Business: shopify.com/blog

---

## ✨ Congratulations!

Once you complete all steps, you have:

✅ A fully functional e-commerce store
✅ Professional design
✅ Mobile responsive layout
✅ WhatsApp order integration
✅ Cart system with persistence
✅ Checkout flow
✅ Live website
✅ Ready for real customers

---

**Start your e-commerce journey today! 🛍️**

Good luck with your Qloryx Market! 🚀

---

## 📝 Notes Section

Use this space to track your progress:

```
WhatsApp Number: ___________________________
Store Name: ___________________________
Domain: ___________________________
Launch Date: ___________________________
First Order Date: ___________________________

Notes:
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
```

---

**Made with ❤️ for Algerian Entrepreneurs**
