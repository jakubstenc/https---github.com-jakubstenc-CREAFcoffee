import { useState } from 'react'
import Home from './components/Home'
import QuickPay from './components/QuickPay'
import TabManager from './components/TabManager'
import Instructions from './components/Instructions'

function App() {
  const [view, setView] = useState('home')

  const goHome = () => setView('home')

  return (
    <div className="app-container">
      {view === 'home' && <Home setView={setView} />}
      {view === 'quickpay' && <QuickPay goHome={goHome} />}
      {view === 'tab' && <TabManager goHome={goHome} />}
      {view === 'instructions' && <Instructions goHome={goHome} />}
    </div>
  )
}

export default App
