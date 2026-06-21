import React, { useState, useEffect } from 'react';
import { ShoppingCart, Home, LogOut, Menu, X, Trash2, Package, MapPin, Phone, User } from 'lucide-react';

export default function QloryxMarket() {
  const [currentPage, setCurrentPage] = useState('home');
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'اللابتوب الحديث',
      description: 'جهاز كمبيوتر محمول بمواصفات عالية وأداء سريع',
      price: 85000,
      image: '💻',
      category: 'إلكترونيات'
    },
    {
      id: 2,
      name: 'الهاتف الذكي',
      description: 'هاتف حديث بكاميرا احترافية وبطارية طويلة',
      price: 45000,
      image: '📱',
      category: 'إلكترونيات'
    },
    {
      id: 3,
      name: 'سماعات رأس',
      description: 'سماعات بصوت عالي الجودة وراحة الاستخدام',
      price: 8500,
      image: '🎧',
      category: 'إلكترونيات'
    },
    {
      id: 4,
      name: 'قميص فاخر',
      description: 'قميص بجودة عالية من أحسن الخامات',
      price: 5500,
      image: '👔',
      category: 'ملابس'
    },
    {
      id: 5,
      name: 'حقيبة جلد',
      description: 'حقيبة أنيقة من جلد طبيعي 100%',
      price: 12500,
      image: '👜',
      category: 'إكسسوارات'
    },
    {
      id: 6,
      name: 'ساعة ذهبية',
      description: 'ساعة كلاسيكية بتصميم فريد',
      price: 22000,
      image: '⌚',
      category: 'إكسسوارات'
    },
    {
      id: 7,
      name: 'حذاء رياضي',
      description: 'حذاء مريح للرياضة واليومي',
      price: 9500,
      image: '👟',
      category: 'أحذية'
    },
    {
      id: 8,
      name: 'نظارة شمسية',
      description: 'نظارة حماية من الأشعة فوق البنفسجية',
      price: 7500,
      image: '🕶️',
      category: 'إكسسوارات'
    }
  ]);

  const [cart, setCart] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    deliveryType: 'home',
    wilaya: ''
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('qloryx_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('qloryx_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQty = (productId, qty) => {
    if (qty < 1) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, qty } : item
      ));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleCheckoutChange = (e) => {
    const { name, value } = e.target;
    setCheckoutForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    
    if (!checkoutForm.firstName || !checkoutForm.lastName || !checkoutForm.phone || !checkoutForm.address || !checkoutForm.wilaya) {
      alert('يرجى ملء جميع الحقول');
      return;
    }

    // Prepare order message
    let orderMessage = `🎉 طلب جديد من Qloryx Market\n\n`;
    orderMessage += `👤 البيانات الشخصية:\n`;
    orderMessage += `الاسم: ${checkoutForm.firstName} ${checkoutForm.lastName}\n`;
    orderMessage += `رقم الهاتف: ${checkoutForm.phone}\n`;
    orderMessage += `الولاية: ${checkoutForm.wilaya}\n`;
    orderMessage += `العنوان: ${checkoutForm.address}\n`;
    orderMessage += `نوع التوصيل: ${checkoutForm.deliveryType === 'home' ? 'توصيل للمنزل' : 'استلام من المكتب'}\n\n`;
    orderMessage += `📦 المنتجات:\n`;
    
    cart.forEach(item => {
      orderMessage += `• ${item.name} × ${item.qty} = ${(item.price * item.qty).toLocaleString()} دج\n`;
    });
    
    orderMessage += `\n💰 الإجمالي: ${cartTotal.toLocaleString()} دج\n`;
    orderMessage += `\nالرجاء تأكيد الطلب وإرسال رابط الدفع`;

    // Open WhatsApp
    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappNumber = '213798765432'; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // Show confirmation
    setOrderConfirmed(true);
    setCart([]);
    localStorage.removeItem('qloryx_cart');
    
    setTimeout(() => {
      setCurrentPage('home');
      setOrderConfirmed(false);
      setCheckoutForm({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        deliveryType: 'home',
        wilaya: ''
      });
    }, 3000);
  };

  // Home Page
  const HomePage = () => (
    <div style={{ direction: 'rtl' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 1rem',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem', fontWeight: 'bold' }}>🛍️ Qloryx Market</h1>
        <p style={{ fontSize: '1.2rem', margin: 0, opacity: 0.9 }}>أفضل متجر إلكتروني للتسوق الذكي</p>
      </div>

      {/* Products Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'right', color: '#333' }}>منتجاتنا</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {products.map(product => (
            <div key={product.id} style={{
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            }}>
              <div style={{
                fontSize: '4rem',
                textAlign: 'center',
                padding: '2rem 1rem',
                background: '#f5f5f5',
                borderBottom: '1px solid #eee'
              }}>
                {product.image}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ color: '#667eea', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {product.category}
                </div>
                <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0', color: '#333', fontWeight: '600' }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.5rem 0 1rem', lineHeight: '1.4' }}>
                  {product.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #eee'
                }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#764ba2' }}>
                    {product.price.toLocaleString()} دج
                  </span>
                  <button onClick={() => {
                    addToCart(product);
                    alert('تم إضافة المنتج للسلة');
                  }} style={{
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    padding: '0.7rem 1.2rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#764ba2'}
                  onMouseLeave={(e) => e.target.style.background = '#667eea'}>
                    أضف للسلة
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Cart Page
  const CartPage = () => (
    <div style={{ direction: 'rtl', maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>🛒 سلتك</h1>
      
      {cart.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          background: '#f5f5f5',
          borderRadius: '8px'
        }}>
          <Package size={48} style={{ margin: '0 auto 1rem', color: '#999' }} />
          <p style={{ fontSize: '1.1rem', color: '#666', margin: 0 }}>سلتك فارغة حالياً</p>
          <button onClick={() => {
            setCurrentPage('home');
            setMobileMenuOpen(false);
          }} style={{
            marginTop: '1.5rem',
            background: '#667eea',
            color: 'white',
            border: 'none',
            padding: '0.7rem 1.5rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            تابع التسوق
          </button>
        </div>
      ) : (
        <>
          <div style={{ background: 'white', borderRadius: '8px', marginBottom: '2rem', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            {cart.map(item => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1.5rem',
                borderBottom: '1px solid #eee',
                gap: '1rem'
              }}>
                <div style={{ fontSize: '3rem' }}>{item.image}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: '#333', fontWeight: '600' }}>
                    {item.name}
                  </h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                    {item.price.toLocaleString()} دج × {item.qty}
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#f5f5f5',
                  borderRadius: '6px',
                  padding: '0.5rem'
                }}>
                  <button onClick={() => updateQty(item.id, item.qty - 1)} style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.3rem 0.6rem',
                    fontSize: '1.2rem'
                  }}>−</button>
                  <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: '600' }}>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.3rem 0.6rem',
                    fontSize: '1.2rem'
                  }}>+</button>
                </div>
                <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#764ba2', minWidth: '120px', textAlign: 'left' }}>
                  {(item.price * item.qty).toLocaleString()} دج
                </span>
                <button onClick={() => removeFromCart(item.id)} style={{
                  background: '#ff6b6b',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}>
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '2px solid #eee'
            }}>
              <span style={{ fontSize: '1.2rem', color: '#333', fontWeight: '600' }}>الإجمالي:</span>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#764ba2' }}>
                {cartTotal.toLocaleString()} دج
              </span>
            </div>

            <button onClick={() => setCurrentPage('checkout')} style={{
              width: '100%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              padding: '1rem',
              borderRadius: '6px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              💳 متابعة للدفع
            </button>
          </div>
        </>
      )}
    </div>
  );

  // Checkout Page
  const CheckoutPage = () => (
    <div style={{ direction: 'rtl', maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>📦 إتمام الطلب</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {/* Form */}
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#333', fontWeight: '600' }}>
            🏠 بيانات التسليم
          </h2>
          <form onSubmit={handleSubmitOrder} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                  الاسم الأول
                </label>
                <input type="text" name="firstName" value={checkoutForm.firstName} onChange={handleCheckoutChange}
                  placeholder="أحمد"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                  الاسم الأخير
                </label>
                <input type="text" name="lastName" value={checkoutForm.lastName} onChange={handleCheckoutChange}
                  placeholder="محمد"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                رقم الهاتف
              </label>
              <input type="tel" name="phone" value={checkoutForm.phone} onChange={handleCheckoutChange}
                placeholder="0798765432"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                الولاية
              </label>
              <select name="wilaya" value={checkoutForm.wilaya} onChange={handleCheckoutChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}>
                <option value="">اختر الولاية</option>
                <option value="الجزائر">الجزائر</option>
                <option value="وهران">وهران</option>
                <option value="قسنطينة">قسنطينة</option>
                <option value="تلمسان">تلمسان</option>
                <option value="عنابة">عنابة</option>
                <option value="بليدة">بليدة</option>
                <option value="سيدي بلعباس">سيدي بلعباس</option>
                <option value="تيبازة">تيبازة</option>
                <option value="البليدة">البليدة</option>
                <option value="الجلفة">الجلفة</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                العنوان الكامل
              </label>
              <textarea name="address" value={checkoutForm.address} onChange={handleCheckoutChange}
                placeholder="شارع... حي... بناية..."
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  minHeight: '80px',
                  fontFamily: 'inherit'
                }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '1rem', color: '#333', fontWeight: '600' }}>
                نوع التسليم
              </label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '0.5rem' }}>
                  <input type="radio" name="deliveryType" value="home" checked={checkoutForm.deliveryType === 'home'} onChange={handleCheckoutChange}
                    style={{ cursor: 'pointer' }} />
                  <span style={{ color: '#333' }}>توصيل للمنزل</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '0.5rem' }}>
                  <input type="radio" name="deliveryType" value="pickup" checked={checkoutForm.deliveryType === 'pickup'} onChange={handleCheckoutChange}
                    style={{ cursor: 'pointer' }} />
                  <span style={{ color: '#333' }}>استلام من المكتب</span>
                </label>
              </div>
            </div>

            <button type="submit" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              padding: '1rem',
              borderRadius: '6px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '1rem',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              ✓ تأكيد الطلب عبر WhatsApp
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '1rem'
          }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#333', fontWeight: '600' }}>
              📋 ملخص الطلب
            </h2>
            <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1rem' }}>
              {cart.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.8rem',
                  alignItems: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{item.image}</span>
                    <div>
                      <p style={{ margin: 0, color: '#333', fontWeight: '500', fontSize: '0.9rem' }}>{item.name}</p>
                      <p style={{ margin: 0, color: '#999', fontSize: '0.8rem' }}>الكمية: {item.qty}</p>
                    </div>
                  </div>
                  <span style={{ fontWeight: '600', color: '#764ba2' }}>
                    {(item.price * item.qty).toLocaleString()} دج
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              background: '#f5f5f5',
              padding: '1rem',
              borderRadius: '6px',
              marginBottom: '1rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem'
              }}>
                <span style={{ color: '#666' }}>المنتجات:</span>
                <span style={{ fontWeight: '600', color: '#333' }}>{(cartTotal).toLocaleString()} دج</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem'
              }}>
                <span style={{ color: '#666' }}>التوصيل:</span>
                <span style={{ fontWeight: '600', color: '#333' }}>مجاني</span>
              </div>
              <div style={{
                borderTop: '2px solid #ddd',
                paddingTop: '0.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontWeight: '600', color: '#333' }}>الإجمالي:</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#764ba2' }}>
                  {cartTotal.toLocaleString()} دج
                </span>
              </div>
            </div>

            <div style={{
              background: '#e3f2fd',
              padding: '1rem',
              borderRadius: '6px',
              borderRight: '4px solid #667eea',
              color: '#333',
              fontSize: '0.9rem',
              lineHeight: '1.6'
            }}>
              <p style={{ margin: '0 0 0.5rem', fontWeight: '600' }}>💳 طريقة الدفع:</p>
              <p style={{ margin: 0 }}>الدفع عند الاستلام (COD)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: '#f9f9f9',
      minHeight: '100vh'
    }}>
      {/* Navigation */}
      <nav style={{
        background: 'white',
        borderBottom: '1px solid #eee',
        padding: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button onClick={() => {
            setCurrentPage('home');
            setMobileMenuOpen(false);
          }} style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#667eea',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}>
            🛍️ Qloryx
          </button>

          {/* Desktop Menu */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }} className="desktop-menu">
            <button onClick={() => {
              setCurrentPage('home');
              setMobileMenuOpen(false);
            }} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              color: currentPage === 'home' ? '#667eea' : '#666',
              fontWeight: currentPage === 'home' ? '600' : '400',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Home size={20} /> الرئيسية
            </button>
            <button onClick={() => {
              setCurrentPage('cart');
              setMobileMenuOpen(false);
            }} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1rem',
              color: currentPage === 'cart' ? '#667eea' : '#666',
              fontWeight: currentPage === 'cart' ? '600' : '400'
            }}>
              <ShoppingCart size={20} /> السلة
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-12px',
                  background: '#ff6b6b',
                  color: 'white',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            fontSize: '1.5rem'
          }} className="mobile-menu-btn">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'white',
          padding: '1rem',
          borderBottom: '1px solid #eee',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <button onClick={() => {
            setCurrentPage('home');
            setMobileMenuOpen(false);
          }} style={{
            width: '100%',
            background: currentPage === 'home' ? '#667eea' : '#f5f5f5',
            color: currentPage === 'home' ? 'white' : '#333',
            border: 'none',
            padding: '0.8rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            🏠 الرئيسية
          </button>
          <button onClick={() => {
            setCurrentPage('cart');
            setMobileMenuOpen(false);
          }} style={{
            width: '100%',
            background: currentPage === 'cart' ? '#667eea' : '#f5f5f5',
            color: currentPage === 'cart' ? 'white' : '#333',
            border: 'none',
            padding: '0.8rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
            position: 'relative'
          }}>
            🛒 السلة {cartCount > 0 && `(${cartCount})`}
          </button>
        </div>
      )}

      {/* Order Confirmation Modal */}
      {orderConfirmed && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 200
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
            maxWidth: '400px'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333' }}>تم استقبال طلبك!</h2>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              سيتواصل معك فريقنا عبر WhatsApp قريباً
            </p>
            <p style={{ color: '#999', fontSize: '0.9rem' }}>يتم تحويلك للرئيسية...</p>
          </div>
        </div>
      )}

      {/* Page Content */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'cart' && <CartPage />}
      {currentPage === 'checkout' && <CheckoutPage />}

      {/* Footer */}
      <footer style={{
        background: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
        marginTop: '3rem'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          © 2024 Qloryx Market - جميع الحقوق محفوظة
        </p>
      </footer>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}