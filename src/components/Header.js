import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
    return (
        <div class="flex-container header">
            <nav>
                <div style={{ display: 'flex'}}>
                    <div class="flex-item" style={{ flex: 2}}>
                        <Link to="/ReactTest/">Home</Link>
                    </div>
                    <div class="flex-item" style={{ flex: 2}}>
                        <Link to="/ReactTest/about">About</Link>
                    </div>
                    <div class="flex-item" style={{ flex: 2}}>
                        <Link to="/ReactTest/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;