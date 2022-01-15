import React from 'react'

const About = () => {
    return (
        <div>
            <h1 className="main-headers">About</h1>
            <div className="container">
                <p className='main-p'>Software Engineer with Certificate in Full-Stack Web Development from UCR Boot Camp and a Bachelor's Degree in Information Management. Recent experience in JavaScript, CSS, Node.js, React.js, MySQL, API Interaction and responsive web design. Detail oriented and hardworking teammate, focused on completing projects on time and above expectation.  I love to keep learning, continue challenging myself, and do interesting things that matter. I applied aspects of MVC paradigm, Handlebars.js and Sequelize in a recent project where I collaborated in a team of three to develop an application that generates NFTs. It takes an image URL attaches metadata in JSON format and uses an NPM Package to create the NFT on the Ethereum Block Chain. I am a fast learner, able to pick up new skills and eager to utilize my skill sets and experience in a full application lifecycle.
                </p>
            </div>
            <h1 className="main-headers">Technical Skills</h1>
            <div className="skills-grid">
                <div>
                    <a className="skills" href='/'><i className="fab fa-js"></i> JavaScript</a>
                </div>
                <div>
                    <a className="skills ui-widget-content ui-state-defadivt ui-helper-clearfix" href='/'><i className="ui-icon ui-icon-jquery">icon</i> jQuery</a>   
                </div>
                <div>
                    <a className="skills" href='/'><i className="fab fa-html5"></i> HTML</a>                    
                </div>
                <div>
                    <a className="skills" href='/'><i className="fab fa-css3"></i> CSS</a>                    
                </div>
                <div>
                    <a className="skills" href='/'><i className="fab fa-bootstrap"></i> Bootstrap</a>                    
                </div>
                <div>
                    <a className="skills" href='/'><i className="fab fa-node-js"></i> Node.js</a>                    
                </div>
                <div className="flex">
                    <img className="custom-icon" src="./mysql.png" alt='MySQL Icon'/><a className="skills" href='/'> MySQL</a>
                </div>
                <div className="flex">
                    <img className="custom-icon" src="./mongodb.png" alt='MongoDB Icon'/><a className="skills" href='/'>mongoDB</a>                    
                </div>
            </div>
        </div>
    )
}

export default About
