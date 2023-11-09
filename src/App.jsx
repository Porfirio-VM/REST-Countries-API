import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import CountryDetail from './components/CountryDetail/CountryDetail'
import ThemeProvider from './hooks/ThemeProvider'
import CountryProvider from './hooks/CountryProvider'

function App() {

  return (
    <>
      <Router>
        <CountryProvider>
          <ThemeProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/country/:countryName" element={<CountryDetail />} />
            </Routes>
          </ThemeProvider>
        </CountryProvider>
      </Router>
  
    
    </>
  )
}

export default App
