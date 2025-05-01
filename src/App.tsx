import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from "./pages/home";
import Setting from './pages/setting';


const App =()=>{
  return(
    <>
    <Router>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Setting/>} path='settings'/>
      </Routes>
    </Router>
    </>
  )
}

export default App