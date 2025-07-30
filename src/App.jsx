import './App.css'
import Footer from './components/Footer/footer.jsx'
import Header from './components/Header/header.jsx'
import Error from './components/pages/error/error.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route element={<Error />} path='*' />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  )
}

export default App
