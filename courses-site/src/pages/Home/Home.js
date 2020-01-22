import React from 'react';
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Demand from "../../components/Demand/Demand";
import Instructors from "../../components/Instructors/Instructors";
import Testimonials from "../../components/Testimonials/Testimonials";
import Parallaxx from "../../components/Parallax/Parallax";

const Home = () => {
    return (<>
        <Banner />
        <Services />
        <Demand />
        <Parallaxx />
        <Instructors />
        <Testimonials /></>);
}

export default Home;