import AppHeader from '../AppHeader/AppHeader'
import CardSlider from '../CardSlider/CardSlider'
import tft from '../../tftlogo.jpeg'
import cloudfabrica from '../../cloudfabrica.jpeg'
import datablock from '../../datablock.jpeg'

import './WorkExperience.css'

const WorkExperience = ({ setApp }) => {
    const data = [
        {
            id: 1,
            name: 'Think Future Technologies',
            location: 'Gurgaon, India',
            logo: tft,
            degree: `Software Engineer`,
            graduation: 'August 2020 - July 2022',
            
        },
        {
            id: 2,
            name: 'Datablock Technologies',
            location: `Noida, India`,
            logo: datablock,
            graduation: 'Jan 2020 - May 2020',
            
        },
        {
            id: 3,
            name: 'Cloudfabrica Technologies',
            location: 'Bangalore, India',
            logo: cloudfabrica,
            graduation: 'May 2019 - July 2019',
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