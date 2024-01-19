import React from 'react';
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../App.css';

const Page = ({ children }) => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={300}>
                <div className="page">
                    {children}
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default Page;