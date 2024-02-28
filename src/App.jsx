import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import { Footer, TopNavigation, BottomNavigation } from './components'
import { useEffect } from 'react';
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);



  return (
    <div className='flex flex-col min-h-screen'>
      <TopNavigation />
      <BottomNavigation />
      <main className='mt-[7rem] flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
