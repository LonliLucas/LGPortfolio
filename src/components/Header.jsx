function Header({ currentPage, handlePageChange }) {
    const clickHandler = (page, event) => {
        event.preventDefault();
        handlePageChange(page);
    }

    return (
        <header className="flex m-0 p-0 w-full">
                <a className="text-5xl p-5 pr-0">Lucas Gilles</a>
                <ul className="ml-auto flex space-x-4 pr-5 mt-6">
                    <li className="md:text-3xl text-2xl ml-4">
                        <a
                            href='AboutMe'
                            onClick={(e) => clickHandler('AboutMe', e)}
                            className={currentPage === 'AboutMe' ? 'menu rounded-full' : ''}
                            >
                            About Me
                        </a>
                     </li>
                    <li className="md:text-3xl text-2xl ml-4 mr-4">
                        <a
                            href='portfolio'
                            onClick={(e) => clickHandler('Portfolio', e)}
                            className={currentPage === 'Portfolio' ? 'menu rounded-full' : ''} 
                            >
                            Portfolio
                        </a>
                    </li>
                    <li className="md:text-3xl text-2xl ml-4 mr-4">
                        <a 
                            href='resume'
                            onClick={(e) => clickHandler('Resume', e)}
                            className={currentPage === 'Resume' ? 'menu rounded-full' : ''}
                            >
                            Resume
                        </a>
                    </li>
                    {/* <li className="md:text-3xl text-2xl ml-4 mr-4">
                        <a 
                            href='ContactMe'
                            onClick={(e) => clickHandler('ContactMe', e)}
                            className={currentPage === 'ContactMe' ? 'menu rounded-full' : ''}
                            >
                            Contact Me
                        </a>
                    </li> */}
                </ul>
         </header>
    )
}

export default Header;