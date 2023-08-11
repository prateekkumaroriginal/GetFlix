import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import '../../../components/carousel/Carousel.scss'
import useFetch from '../../../hooks/useFetch'

const Trending = () => {
    const [endpoint, setEndpoint] = useState('day')
    const {data, loading} = useFetch(`/trending/all/${endpoint}`)

    const handleTabChange = (tab) => {
        setEndpoint(tab.toLowerCase())
    }
    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={['Day', 'Week']} onTabChange={handleTabChange} />
            </ContentWrapper>
        </div>
    )
}

export default Trending