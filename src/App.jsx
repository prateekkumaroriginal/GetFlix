import { useState, useEffect } from 'react'
import fetchDataFromApi from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice';
import Home from './pages/home/home';
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
        apiTesting();
    }, [])

    const apiTesting = () => {
        fetchDataFromApi('/movie/popular').then((res) => {
            console.log(res);
            dispatch(getApiConfiguration(res))
        })
    }

    return (
        <div className='App'>
            App
            {url?.total_pages}
        </div>
    )
}

export default App
