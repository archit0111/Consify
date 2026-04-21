import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App