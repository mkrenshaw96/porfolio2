import React from 'react';
import FetchIMG from './Assets/fetch2.png';
import Portfolio1 from './Assets/portfolio1.png';
import Doggo1 from './Assets/Assets.png';
import './Project.css';

const Project = () => {
    return (
        <div id='proj-main-wrap'>
            <a href="https://m-fetch.herokuapp.com/" target='blank'>
                <div className='project-wrapper' style={{ background: '#f64662' }}>
                    <img src={FetchIMG} alt="fetch" className='preview-img' />
                </div>
            </a>
            <div className='desc'>
                <p><a href="https://m-fetch.herokuapp.com/" target='blank'><span className='bold-desc'>Fetch</span></a> | an Instagram clone built using React and PostgreSQL.</p>
            </div>

            <a href="https://mkrenshaw96.github.io/" target='blank'>
                <div className='project-wrapper' style={{ background: '#8f71ff' }}>
                    <img src={Portfolio1} alt="fetch" className='preview-img' />
                </div>
            </a>
            <div className='desc'>
                <p> <a href="https://mkrenshaw96.github.io/" target='blank'><span className='bold-desc'>Portfolio1</span></a> | my first portfolio made using Twitter's Bootstrap.</p>
            </div>

            <a href="https://michaelapiproject.firebaseapp.com/" target='blank'>
                <div className='project-wrapper' style={{ background: '#67eaca' }}>
                    <img src={Doggo1} alt="fetch" className='preview-img' />
                </div>
            </a>
            <div className='desc'>
                <p><a href="https://michaelapiproject.firebaseapp.com/" target='blank'><span className='bold-desc'>Doggo</span></a> | an API for dog breeds created with vanilla JavaScript.</p>
            </div>

        </div>
    )
}

export default Project;