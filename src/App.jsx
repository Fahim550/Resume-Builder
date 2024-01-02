
import { ToastContainer } from 'react-toastify'
import './App.css'
import Body from './components/Body/Body'
import Header from './components/Header'

function App() {

  return (
    <div className='app'>
    <Header/>
    <Body/>
    <ToastContainer />
    </div>
  )
}

export default App
