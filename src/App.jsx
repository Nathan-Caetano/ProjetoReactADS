import './App.css'
import Footer from './components/Footer/footer.jsx'
import Header from './components/Header/header.jsx'
import Error from './components/pages/error/error.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/home.jsx'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Error />} path='*' />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
};

export default App

//fazer um sistema de autenticação
