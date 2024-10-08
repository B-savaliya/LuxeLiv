import React from 'react'
import HeroBanner from './herobanner'
import ArchitectureMind from './architectureMind'
import FromOurBlog from './fromOurBlog'
import OtherProjects from './otherProjects'
import OurWork from './ourWork'

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <ArchitectureMind />
            <OtherProjects />
            <FromOurBlog />
            <OurWork />
        </div>
    )
}

export default Home
