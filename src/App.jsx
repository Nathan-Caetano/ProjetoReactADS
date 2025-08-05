import './App.css'
import Footer from './components/Footer/footer.jsx'
import Header from './components/Header/header.jsx'
import Error from './components/pages/error/error.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/home.jsx'
import Login from './components/auth/login/login.jsx'

function App() {

  return (

    <Login />
   /*<BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Error />} path='*' />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter> */
  )
};

export default App

//fazer um sistema de autenticação
