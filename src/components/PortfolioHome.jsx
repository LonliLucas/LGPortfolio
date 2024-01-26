import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
// import ContactMe from './pages/ContactMe';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';

function PortfolioHome() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />
        }
        // if (currentPage === 'ContactMe') {
        //     return <ContactMe />
        // }
        // if (currentPage === 'Portfolio') {
        //     return <Portfolio />
        // }
        // if (currentPage === 'Resume') {
        //     return <Resume />
        // }
    };

    console.log(currentPage);

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <main className="mx-3">{renderPage()}</main>
            <Footer />
        </div>
    );
}

export default PortfolioHome;