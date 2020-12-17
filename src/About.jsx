import React from 'react';
import web from "../src/images/business1.jpg";
import Common from "./Common";


const About = () => {
    return (
        <>
            <Common  
                name=' WelCome to About page ' 
                imgsrc={web} 
                visit="/contact"
                btname="Contact Now"
            />
        </>
    );

};
export default About;