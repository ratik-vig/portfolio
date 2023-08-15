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
    return(
        <div style={{ height: '100%', overflow: 'scroll', backgroundColor: '#f5f5f7', animation: 'openApp 0.2s'}}>
            <AppHeader setApp={setApp} appTitle={"Education"}/>
            <div className='details-container'>
                <CardSlider />
                <Lists listItems={coursesMasters} />
            </div>
        </div>
    )
}

export default Education