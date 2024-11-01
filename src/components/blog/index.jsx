import React from "react";
import BlogHB from "./blogHB";
import BlogCard from "./blogCard";
import MarketTrends from "./marketTrends";
import CraftsCulture from "./CraftsCulture";
import PropertyWithCulture from "./PropertyWithCulture";

// Image imports
import blogImg1 from '../../assets/images/blog1.webp'
import blogImg2 from '../../assets/images/blog2.webp'
import blogImg3 from '../../assets/images/oomm-dining-villa-BW.webp'
import blogImg4 from '../../assets/images/oomm-dining-alma-drone-view.webp'
import blogImg5 from '../../assets/images/oomm-exterior-landscape-drone-sunrise.webp'
import blogImg6 from '../../assets/images/oomm-dining-canalan-restaurant-dining-tables.webp'
import blogImg7 from '../../assets/images/crafts & culture.webp'
import blogImg8 from '../../assets/images/cultureHeritage.webp'
import blogImg9 from '../../assets/images/cultureHeritage2.webp'

const Blog = () => {
    // Object containing all blog images
    const blogImages = {
        blogImg1,
        blogImg2,
        blogImg3,
        blogImg4,
        blogImg5,
        blogImg6,
        blogImg7,
        blogImg8,
        blogImg9
    };

    return (
        <div className="blog">
            <BlogHB images={blogImages}/>
            <BlogCard images={blogImages}/>
            <MarketTrends images={blogImages}/>
            <CraftsCulture images={blogImages}/>
            <PropertyWithCulture images={blogImages}/>
        </div>
    )
}

export default Blog;
