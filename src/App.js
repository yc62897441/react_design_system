import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 頁面
import ButtonsPage from './containers/ButtonsPage.jsx'
import FormPage from './containers/FormPage.jsx'
import HomePage from './containers/HomePage.jsx'
import ModalPage from './containers/ModalPage.jsx'
import TablePage from './containers/TablePage.jsx'
import TablePageNoPagination from './containers/TablePageNoPagination.jsx'
import TextPage from './containers/TextPage.jsx'
import TitlesPage from './containers/TitlesPage.jsx'

import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

import './index.css'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/ButtonsPage" element={<ButtonsPage />} />
                <Route path="/FormPage" element={<FormPage />} />
                <Route path="/ModalPage" element={<ModalPage />} />
                <Route path="/TablePage" element={<TablePage />} />
                <Route path="/TablePageNoPagination" element={<TablePageNoPagination />} />
                <Route path="/TextPage" element={<TextPage />} />
                <Route path="/TitlesPage" element={<TitlesPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
