import './Education.css'
import AppHeader from '../AppHeader/AppHeader'
import nyu from '../../nyu.png'
import CardSlider from '../CardSlider/CardSlider'
import Lists from '../Lists/Lists'
const Education = ({setApp}) => {
    const coursesMasters = [
        "Data Structures and Algorithms",
        "Database Design and Principles",
        "Internet Architecture and Protocols",
        "Realtime Embedded Systems",
        "Computer Systems Architecture"
    ]
    const data = [
        {
            id: 1,
            name: 'New York University',
            degree: `Master's in Computer Engineering`,
            graduation: 'May 2024',
            gpa: '3.89/4.0',
            courses: [
                "Data Structures and Algorithms",
                "Database Design and Principles",
                "Internet Architecture and Protocols",
                "Realtime Embedded Systems",
                "Computer Systems Architecture"
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
            <AppHeader setApp={setApp} appTitle={"Education"}  />
            <div className='details-container'>
                <CardSlider data={data}/>
                {/* <Lists listItems={coursesMasters} /> */}
            </div>
        </div>
    )
}

export default Education