import React from 'react';
import Carousel from '../components/Carousel';
import TabCategories from '../components/TabCategories';
import { useLoaderData } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <Carousel />
            <TabCategories />
        </div>
    );
};

export default Homepage;