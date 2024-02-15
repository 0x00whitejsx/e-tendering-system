import About from './component/About'
import Bid from './component/Bid'
import Home from './component/Home'
import Policy from './component/Policy'
import Project from './component/Project'
import Skills from './component/Skills'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/Projects' element={<Project />} />
      <Route path='/Skills' element={  <Skills />} />
      <Route path='/About' element={ <About /> } />
      <Route path='/Bid' element={ <Bid /> } />
      <Route path='/Policy' element={ <Policy /> } />
    </Routes>

)
}

export default App
