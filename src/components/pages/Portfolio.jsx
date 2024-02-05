function Portfolio() {
    const thePlugLink = () => {
        event.stopPropagation();
        const link = 'https://sleepy-bayou-35337-4939ad58a73e.herokuapp.com/';
        window.open(link, '_blank');
    };

    const movieKnightLink = () => {
        event.stopPropagation();
        const link = 'https://cpulsipher24.github.io/Movie-Knight/';
        window.open(link, '_blank');
    };
    
    const trackEmployLink = () => {
        event.stopPropagation();
        const link = 'https://github.com/LonliLucas/TrackEmploy';
        window.open(link, '_blank');
    };

    return (
        <div>
            <ul className="flex flex-wrap justify-between size">
                <li className="portfolio-card flex flex-col items-center justify-between theplug-background h-80 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-6 mb-4 cursor-pointer shadow-lg" onClick={ thePlugLink }>
                    <a className="text-black text-xl">The Plug</a>
                    <a href="https://github.com/Krich2022/The_Plug" target="_blank" rel="noopener noreferrer" className="bg-slate-200 rounded-full shadow-md" onClick={(event) => event.stopPropagation()}>
                        <img src="github-repo.svg" className="size-14" />
                    </a>
                </li>
                <li className="portfolio-card flex flex-col items-center justify-between movieknight-background h-80 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-6 mb-4 cursor-pointer shadow-lg" onClick={ movieKnightLink }>
                    <a className="text-xl">Movie-Knight</a>
                    <a href="https://github.com/cpulsipher24/Movie-Knight" target="_blank" rel="noopener noreferrer" className="bg-slate-200 rounded-full shadow-md" onClick={(event) => event.stopPropagation()}>
                        <img src="github-repo.svg" className="size-14" />
                    </a>
                </li>
                <li className="portfolio-card flex flex-col items-center justify-between trackemploy-background h-80 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-6 mb-4 cursor-pointer shadow-lg" onClick={ trackEmployLink }>
                    <a className="text-xl">TrackEmploy</a>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio;