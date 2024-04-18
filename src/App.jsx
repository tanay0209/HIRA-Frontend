import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import { Footer, TopNavigation, BottomNav } from './components'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCartItems } from './store/cartSlice';
import { setWishlistedItems } from './store/wishlistSlice';
import { setUsers } from './store/authSlice';



function App() {

  const location = useLocation();
  const dispatch = useDispatch()
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    const wishlistedItems = localStorage.getItem('wishlisted')
    const users = localStorage.getItem("users")
    if (savedCartItems) {
      dispatch(setCartItems(JSON.parse(savedCartItems)));
    }
    if (wishlistedItems) {
      dispatch(setWishlistedItems(JSON.parse(wishlistedItems)))
    }
    if (users) {
      dispatch(setUsers(JSON.parse(users)))
    }
    window.scrollTo(0, 0);

  }, [location]);

  return (
    <div className='flex flex-col min-h-screen'>
      <TopNavigation />
      <BottomNav />
      <main className='mt-[7rem] flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
