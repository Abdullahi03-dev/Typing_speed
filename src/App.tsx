import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from "./pages/home";
import Setting from './pages/setting';
import Typing from './pages/typing';
import Result from './components/resultcomp';
import { Toaster } from 'react-hot-toast';


const App =()=>{
  return(
    <>
    <Router>
      <Toaster position="top-left"/>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Setting/>} path='settings'/>
        <Route element={<Typing/>} path="typingtest"/>
        <Route element={<Result/>} path='result'/>
      </Routes>
    </Router>
    </>
  )
}

export default App