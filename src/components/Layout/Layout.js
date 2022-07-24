import React from 'react';
import Task from '../Task/Task';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
const Layout = () => {
    return (
        <div>
            <Navbar />
            <Task />
            <Footer/>
        </div>
    );
};

export default Layout;