function Header() {
    return (
        <header className="flex ">
                <h1 className="text-5xl p-5">Lucas Gilles</h1>
                <ul className="ml-auto flex space-x-4 pr-5">
                    <li><button className="about-me-button text-3xl mt-6 ml-4 mr-4">About Me</button></li>
                    <li><button className="portfolio-button text-3xl mt-6 ml-4 mr-4">Portfolio</button></li>
                    <li><button className="resume-button text-3xl mt-6 ml-4 mr-4">Resume</button></li>
                    <li><button className="contactme-button text-3xl mt-6 ml-4 mr-4">Contact Me</button></li>
                </ul>
         </header>
    )
}

export default Header;