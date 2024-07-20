import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Schedule } from './pages/Schedule'
import { Gallery } from './pages/Gallery'
import { Pricing } from './pages/Pricing'
import { Classes } from './pages/Classes'
import { Contact } from './pages/Contact'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/schedule' element={<Schedule />}/>
          <Route path='/pricing' element={<Pricing />}/>
          <Route path='/classes' element={<Classes />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
