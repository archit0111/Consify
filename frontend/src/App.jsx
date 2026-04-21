import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard"
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'

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
