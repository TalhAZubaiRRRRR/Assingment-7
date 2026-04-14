import React from 'react';

import FriendDetails from '../pages/FriendDetails/FriendDetails';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import BodyPart from '../components/BodyPart';
import HomePage from '../components/HomePage/HomePage';
import Friends from '../pages/Fridends/Friends';


const Root = () => {
    return (
        <div>
        <HomePage/>
        
        <main>
            <Outlet/>
        </main>
        <Footer/>
        
        </div>
        
    );
};

export default Root;