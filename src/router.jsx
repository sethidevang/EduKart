// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/layout'
import Login from './components/login'
import Admin from './components/admin'
import AboutUs from './components/About-us/AboutUs'
import Home from './pages/Home'
import Contact from './components/contact'
import Testimonials from './components/Testimonial/Testimonials'
import Newsletter from './components/Newsletter/Newsletter'
import FreeCourse from './components/Free-course-section/FreeCourse'
import Features from './components/Feature-section/Features'
import Courses from './components/Courses-section/Courses'
const routes = () => {
    return (
        <BrowserRouter>
        
            <Routes >
                <Route path="/" element={<Layout />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/about" element={<AboutUs />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/test" element={<Testimonials />}></Route>
                <Route path="/news" element={<Newsletter />}></Route>
                <Route path="/free" element={<FreeCourse />}></Route>
                <Route path="/feet" element={<Features />}></Route>
                <Route path="/course" element={<Courses />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default routes
