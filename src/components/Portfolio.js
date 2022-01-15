import React from 'react'

const Portfolio = () => {
    return (
        <div>
            <h1 className="main-headers">Portfolio</h1>
            <div className="container work">
                <div className="items large-img">
                    <div className="app-links">
                        <a href="https://nft-generator101.herokuapp.com/" className="deployed-version code-box"
                            target="_blank" rel='noreferrer'>NFT Generator</a>
                        <a href="https://github.com/anun05/nft-generator.git" className="github-version code-box"
                            target="_blank" rel='noreferrer'>GitHub Repository</a>
                    </div>
                </div>
                <div className="items project-4">
                    <div className="app-links">
                        <a href="https://agile-wildwood-77680.herokuapp.com/" className="deployed-version code-box"
                            target="_blank" rel='noreferrer'>Coding Tech Blog</a>
                        <a href="https://github.com/israelmrios/Coding-Tech-Blog.git" className="github-version code-box"
                            target="_blank" rel='noreferrer'>GitHub Repository</a>
                    </div>
                </div>                 
                <div className="items project-3">
                    <div className="app-links">
                        <a href="https://israelmrios.github.io/Movie-Finder/" className="deployed-version code-box"
                            target="_blank" rel='noreferrer'>Movie Finder</a>
                        <a href="https://github.com/israelmrios/Movie-Finder.git" className="github-version code-box"
                            target="_blank" rel='noreferrer'>GitHub Repository</a>
                    </div>
                </div>
                <div className="items project-2">
                    <div className="app-links">
                        <a href="https://israelmrios.github.io/Weather-Dashboard/" className="deployed-version code-box"
                            target="_blank" rel='noreferrer'>Weather Dashboard</a>
                        <a href="https://github.com/israelmrios/Weather-Dashboard.git" className="github-version code-box"
                            target="_blank" rel='noreferrer'>GitHub Repository</a>
                    </div>
                </div>
                <div className="items project-1">
                    <div className="app-links">
                        <a href="https://israelmrios.github.io/Work-Day-Scheduler/" className="deployed-version code-box"
                            target="_blank" rel='noreferrer'>Work Day Scheduler</a>
                        <a href="https://github.com/israelmrios/Work-Day-Scheduler.git" className="github-version code-box"
                            target="_blank" rel='noreferrer'>GitHub Repository</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
