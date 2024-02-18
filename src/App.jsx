import { Outlet } from 'react-router-dom'
import './App.css'
import { BottomNav, TopNav } from './components'

function App() {
  return (
    <>
      <TopNav />
      <BottomNav />
      <main className='mt-[7rem]'>
        <Outlet />
      </main>
    </>
  )
}

export default App
