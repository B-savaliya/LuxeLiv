import React from 'react'
import HeroBanner from './herobanner'
import ArchitectureMind from './architectureMind'
import FromOurBlog from './fromOurBlog'
import OtherProjects from './otherProjects'
import OurWork from './ourWork'
import MapSection from './mapSection'

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <ArchitectureMind />
            <OtherProjects />
            <FromOurBlog />
            <OurWork />
            <MapSection />
        </div>
    )
}

export default Home
