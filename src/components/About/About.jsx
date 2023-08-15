import AppHeader from '../AppHeader/AppHeader'
import profileImage from '../../Subject.png'

import './About.css'

const About = ({ setApp }) => {
   

    return(
        <div style={{ height: '100%', overflow: 'scroll', backgroundColor: '#f5f5f7', animation: 'openApp 0.2s'}}>
            <AppHeader setApp={setApp} appTitle={"About Me"}/>
            <div className='details-container'>
                <div className='profile-image-wrapper' >
                    <img src={profileImage} className='profile-image'/>
                </div>
                <div>
                    <h2 className='name-text'>RATIK VIG</h2>
                    <p className='email-text'>rv2292@nyu.edu</p>
                    <p className='email-text' style={{marginTop: 1}}>+1 609-721-9871</p>
                </div>
            </div>
            <div className='about-me-container'>
                <p className='about-text'>
                MS Computer engineering student at NYU Tandon. Software Engineer with a curious mind, quick-learning capability, and problem solving orientation. 2 years work experience at Think Future Technologies, Gurgaon, India, developing mobile and web application for clients using React.js, React Native, and Node.js
                </p>
                
            </div>

        </div>
    )
}

export default About