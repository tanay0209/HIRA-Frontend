import { Outlet } from 'react-router-dom'
import './App.css'
import { BottomNav, Footer, TopNav } from './components'

function App() {
  return (
    <>
      <TopNav />
      <BottomNav />
      <main className='mt-[7rem]'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
