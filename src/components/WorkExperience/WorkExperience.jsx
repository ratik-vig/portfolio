import AppHeader from '../AppHeader/AppHeader'
import CardSlider from '../CardSlider/CardSlider'
import './WorkExperience.css'

const WorkExperience = ({ setApp }) => {
    const data = [
        {
            id: 1,
            name: 'Think Future Technologies',
            degree: `Software Engineer`,
            graduation: 'August 2020 - July 2022',
            // gpa: '3.89/4.0',
            // courses: [
            //     "Data Structures and Algorithms",
            //     "Database Design and Principles",
            //     "Internet Architecture and Protocols",
            //     "Realtime Embedded Systems",
            //     "Computer Systems Architecture"
            // ]
        },
        {
            id: 2,
            name: 'Bennett University',
            degree: `Bachelor's in Computer Science`,
            graduation: 'June 2020',
            gpa: '8.1/10.0',
            courses: [
                "Introduction to Programming using Python",
                "Computer Networks",
                "Operating Systems",
                "Data Structures and Algorithms",
                "Software Engineering",
                "Database Systems",
                "Discrete Mathematics",
                "Artificial Intelligence and Machine Learning",
                "Deep Learning"
            ]
        },
        {
            id: 2,
            name: 'Bennett University',
            degree: `Bachelor's in Computer Science`,
            graduation: 'June 2020',
            gpa: '8.1/10.0',
            courses: [
                "Introduction to Programming using Python",
                "Computer Networks",
                "Operating Systems",
                "Data Structures and Algorithms",
                "Software Engineering",
                "Database Systems",
                "Discrete Mathematics",
                "Artificial Intelligence and Machine Learning",
                "Deep Learning"
            ]
        }
    ]
    return(
        <div style={{ height: '100%', overflow: 'scroll', backgroundColor: '#f5f5f7', animation: 'openApp 0.2s'}}>
            <AppHeader setApp={setApp} appTitle={"Work Experience"}  />
            <div className='details-container'>
                <CardSlider data={data}/>
            </div>
        </div>
    )
}

export default WorkExperience