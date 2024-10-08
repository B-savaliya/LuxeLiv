import React from 'react'
import HeroBanner from './herobanner'
import ArchitectureMind from './architectureMind'
import FromOurBlog from './fromOurBlog'
import OtherProjects from './ouerProjects'

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <ArchitectureMind />
            <OtherProjects />
            <FromOurBlog />
        </div>
    )
}

export default Home
