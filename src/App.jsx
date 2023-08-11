import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import fetchDataFromApi from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice';
import Home from './pages/home/Home';
import Details from './pages/details/details';
import PageNotFound from './pages/404/PageNotFound'
import Explore from './pages/explore/Explore'
import SeachResult from './pages/searchResult/SearchResult'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
    const dispatch = useDispatch()
    const { url } = useSelector((state) => state.home)

    useEffect(() => {
        fetchApiConfig();
    }, [])

    const fetchApiConfig = () => {
        fetchDataFromApi('/configuration').then((res) => {
            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            }

            dispatch(getApiConfiguration(url))
        })
    }

    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/explore/:mediaType' element={<Explore />} />
                    <Route path='/search/:query' element={<SeachResult />} />
                    <Route path='/:mediaType/:id' element={<Details />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
