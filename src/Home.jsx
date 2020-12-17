import React from 'react';  
import web from "../src/images/olmpic.jpg";
import Common from "./Common";


const Home = () => {
    return (
        <>
            <Common 
                name=' Grow your busniess with ' 
                imgsrc={web} 
                visit="/service"
                btname=" Get Started "
            />
        </>
    );

};
export default Home;