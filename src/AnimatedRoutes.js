import React from 'react';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import {BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import { motion, AnimatePresence} from 'framer-motion';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/ReactApp" element={
                    <motion.div
                    style={{ 'background-color': 'red','color':'blue' }}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    transition={{duration:0.3}}
                    >
                        <Home />
                    </motion.div> 
                }/>
                <Route path="/ReactApp/about" element={                    
                    <motion.div
                    style={{ 'background-color': 'red','color':'blue' }}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    transition={{duration:0.3}}
                    >
                        <About />
                    </motion.div> 
                }/>
                <Route path="/ReactApp/contact" element={
                    <motion.div
                    style={{ 'background-color': 'red','color':'blue' }}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    transition={{duration:0.3}}
                    >
                        <Contact />
                    </motion.div> 
                }/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes