import React from 'react';
import RESUME from './Assets/Michael_Crenshaw_Resume.pdf';
import './Skills.css';

const Skills = () => {
    return (
        <>
            <div id='skills-wrapper'>
                <div className='col'>
                    <span className='title'>Front-End</span>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript ES6</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>Bootstrap</li>
                        <li>Material UI</li>
                    </ul>
                </div>
                <div className='col'>
                    <span className='title'>Back-End</span>
                    <ul>
                        <li>Node.Js</li>
                        <li>Express</li>
                        <li>Sequelize</li>
                        <li>PostgreSQL</li>
                        <li>API Development</li>
                        <li>Postman</li>
                    </ul>
                </div>
            </div>
            <div id='skills-wrapper'>
                <div className='col'>
                    <span className='title'>Design</span>
                    <ul>
                        <li>Invision Studio</li>
                        <li>Dribble</li>
                        <li><a href="https://codepen.io/__mkc/" target='blank'>Codepen</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <span className='title'>Network</span>
                    <ul>
                        <li><a href="mailto: mkrenshaw96@gmail.com">Email</a></li>
                        <li><a href={RESUME} target='blank'>Resume</a></li>
                        <li><a href="https://www.linkedin.com/in/michael-crenshaw/" target='blank'>Linkedin</a></li>
                        <li><a href="https://github.com/mkrenshaw96" target='blank'>Github</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Skills;