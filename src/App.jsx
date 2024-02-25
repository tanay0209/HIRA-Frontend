import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer, TopNavigation, BottomNavigation } from './components'

function App() {
  return (
    <div>
      <TopNavigation />
      <BottomNavigation />
      <main className='mt-[7rem]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
