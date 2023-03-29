import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './containers/HomePage.jsx'
import ButtonsPage from './containers/ButtonsPage.jsx'
import Header from './components/Header.jsx'

import './index.css'

function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ButtonsPage" element={<ButtonsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
