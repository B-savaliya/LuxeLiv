import React from "react";
import GreenhouseHeroBanner from "./greenhouseherobanner";
import GreenhouseDetailes from "./greenHouseDetailes";
import StandardProperty from "./standardProperty";
import Testimonials from "./testimonials";
import ContactUsGreenHouse from "./contactusGreenHouse";
const Greenhouse = () => {
    return (
        <div>
            <GreenhouseHeroBanner />
            <GreenhouseDetailes /> 
            <StandardProperty />
            <Testimonials />
            <ContactUsGreenHouse />
        </div>
    );
}

export default Greenhouse;
