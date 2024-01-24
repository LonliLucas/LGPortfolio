// import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './AboutMe';
// import ContactMe from './ContactMe';
// import Portfolio from './Portfolio';
// import Resume from './Resume';

function PortfolioHome() {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Header />
            <AboutMe />
            <Footer />
        </div>
    );
}

export default PortfolioHome;