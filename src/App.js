import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './containers/HomePage.jsx'
import ButtonsPage from './containers/ButtonsPage.jsx'
import TitlesPage from './containers/TitlesPage.jsx'
import TextPage from './containers/TextPage.jsx'
import TablePage from './containers/TablePage.jsx'
import FormPage from './containers/FormPage.jsx'
import Header from './components/Header.jsx'

import './index.css'

function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ButtonsPage" element={<ButtonsPage />} />
                <Route path="/TitlesPage" element={<TitlesPage />} />
                <Route path="/TextPage" element={<TextPage />} />
                <Route path="/TablePage" element={<TablePage />} />
                <Route path="/FormPage" element={<FormPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

// TODO: 建立標題用的字體
// TODO: button 建立不同的字型、字體大小的樣式、padding