// import { Link } from 'react-router-dom';

function Header({ currentPage, handlePageChange }) {
    const clickHandler = (page, event) => {
        event.preventDefault();
        handlePageChange(page);
    }

    return (
        <header className="flex">
                <h1 className="text-5xl p-5">Lucas Gilles</h1>
                <ul className="ml-auto flex space-x-4 pr-5 mt-6">
                    <li className="text-3xl ml-4">
                        <a
                            href='AboutMe'
                            onClick={(e) => clickHandler('AboutMe', e)}
                            className={currentPage === 'AboutMe' ? 'menu rounded-full' : ''}
                            >
                            About Me
                        </a>
                     </li>
                    <li className="text-3xl ml-4 mr-4">
                        <a
                            href='portfolio'
                            onClick={(e) => clickHandler('Portfolio', e)}
                            className={currentPage === 'Portfolio' ? 'menu rounded-full' : ''} 
                            >
                            Portfolio
                        </a>
                    </li>
                    <li className="text-3xl ml-4 mr-4">
                        <a 
                            href='resume'
                            onClick={(e) => clickHandler('Resume', e)}
                            className={currentPage === 'Resume' ? 'menu rounded-full' : ''}
                            >
                            Resume
                        </a>
                    </li>
                    <li className="text-3xl ml-4 mr-4">
                        <a 
                            href='ContactMe'
                            onClick={(e) => clickHandler('ContactMe', e)}
                            className={currentPage === 'ContactMe' ? 'menu rounded-full' : ''}
                            >
                            Contact Me
                        </a>
                    </li>
                </ul>
         </header>
    )
}

export default Header;