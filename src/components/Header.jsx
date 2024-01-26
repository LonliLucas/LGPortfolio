function Header({ currentPage, handlePageChange }) {
    return (
        <header className="flex">
                <h1 className="text-5xl p-5">Lucas Gilles</h1>
                <ul className="ml-auto flex space-x-4 pr-5 mt-6">
                    <li className="text-3xl ml-4 mr-4">
                        <a
                            href='aboutme'
                            onClick={() => handlePageChange('AboutMe')}
                            >
                            About Me
                         </a>
                     </li>
                    <li className="text-3xl ml-4 mr-4">
                        <a
                            href='portfolio'
                            onClick={() => handlePageChange('Portfolio')} 
                            >
                            Portfolio
                        </a>
                    </li>
                    <li className="text-3xl ml-4 mr-4">
                        <a 
                            href='resume'
                            onClick={() => handlePageChange('Resume')}>
                            Resume
                        </a>
                    </li>
                    <li className="text-3xl ml-4 mr-4">
                        <a 
                            href='contactme'
                            onClick={() => handlePageChange('ContactMe')}>
                            Contact Me
                        </a>
                    </li>
                </ul>
         </header>
    )
}

export default Header;