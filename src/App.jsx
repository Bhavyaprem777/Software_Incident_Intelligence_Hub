import { useMemo, useState } from 'react'
import CheckoutModal from './components/CheckoutModal'
import HomePage from './pages/HomePage'
import LittleJoysPage from './pages/LittleJoysPage'
import OurStoryPage from './pages/OurStoryPage'
import ShopAllPage from './pages/ShopAllPage'

const pageTitles = { home: 'Home', shop: 'Shop all', joys: 'Little joys', story: 'Our story' }

function App() {
  const [cart, setCart] = useState([])
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [page, setPage] = useState('home')
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.price * item.quantity, 0), [cart])

  function navigate(nextPage) { setPage(nextPage); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  function addToCart(product) { setCart((current) => { const existing = current.find((item) => item.id === product.id); return existing ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }] }) }
  function updateQuantity(productId, change) { setCart((current) => current.map((item) => item.id === productId ? { ...item, quantity: item.quantity + change } : item).filter((item) => item.quantity > 0)) }
  function clearCart() { setCart([]); setIsCheckoutOpen(false) }

  let content
  if (page === 'shop') content = <ShopAllPage 
                        onAddToCart={addToCart}
                        onNavigate={navigate} />
  else if (page === 'joys') content = <LittleJoysPage onNavigate={navigate} />
  else if (page === 'story') content = <OurStoryPage onNavigate={navigate} />
  else content = <HomePage cart={cart} total={cartTotal} onAddToCart={addToCart} onUpdateQuantity={updateQuantity} onCheckout={() => setIsCheckoutOpen(true)} onNavigate={navigate} />

  return <main className="min-h-screen overflow-x-hidden bg-[#fbf7ef] text-[#3e342b]">
    <div className="border-b border-[#e9e0d2] bg-[#f5eee3] px-5 py-2 text-center text-xs font-medium tracking-wide text-[#756556]">Free UK delivery on orders over £45 · This is a demo shop</div>
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"><button type="button" onClick={() => navigate('home')} className="font-serif text-2xl font-semibold tracking-tight text-[#46362a]">Morrow &amp; Co.</button><nav className="hidden items-center gap-7 text-sm font-medium text-[#67584b] md:flex" aria-label="Main navigation">{Object.entries(pageTitles).filter(([key]) => key !== 'home').map(([key, title]) => <button key={key} type="button" onClick={() => navigate(key)} className={page === key ? 'text-[#a65d43]' : 'hover:text-[#a65d43]'}>{title}</button>)}</nav><button type="button" onClick={() => itemCount > 0 ? setIsCheckoutOpen(true) : navigate('shop')} className="rounded-full border border-[#d8c6b1] bg-white px-4 py-2 text-sm font-semibold text-[#554437] shadow-sm transition hover:border-[#b76a4d]" aria-label={`Open cart with ${itemCount} items`}>Basket <span className="ml-1 rounded-full bg-[#d77b5b] px-1.5 py-0.5 text-xs text-white">{itemCount}</span></button></header>
    {content}
    <footer className="border-t border-[#e9e0d2] bg-[#f5eee3]"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[#756556] sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Morrow &amp; Co. · Fictional storefront for an Incident Intelligence Hub.</p><div className="flex gap-5">{Object.entries(pageTitles).filter(([key]) => key !== 'home').map(([key, title]) => <button key={key} type="button" onClick={() => navigate(key)} className="hover:text-[#a65d43]">{title}</button>)}</div></div></footer>
    <CheckoutModal isOpen={isCheckoutOpen} cart={cart} total={cartTotal} onClose={() => setIsCheckoutOpen(false)} onSuccessfulPayment={clearCart} />
  </main>
}
export default App
