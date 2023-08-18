import LinkedIn from '../../linkedin.svg'
import Github from '../../github.svg'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'

import './PhoneDock.css'
import PhoneApps from '../PhoneApps/PhoneApps'

const PhoneDock = ({setApp}) => {
    return(
        <div className='phone-dock'>
            <div className='name-capsule'>
                <p>Ratik Vig</p>
            </div>
            <div className='dock-row'>
                <PhoneApps 
                    icon={<FontAwesomeIcon icon={faPhone} style={{color: 'white', fontSize: 24}}/>}
                    handleClick={() => setApp(3)}
                />
                <PhoneApps 
                    icon={<img src={LinkedIn} style={{width: 36, height: 36, zIndex: 2}}/>}
                    filler={true}
                    fillerColor={'#fff'}
                    iStyle={{background: '#0277b5', overflow: 'hidden'}}
                    handleClick={() => window.open("https://www.linkedin.com/in/ratik-vig-b40762157") }
                />
                <PhoneApps 
                    icon={<img src={Github} style={{width: 36, height: 36, backgroundColor: 'white'}} className='github-filter'/>}
                    iStyle={{background: '#fff'}}
                    handleClick={() => window.open("https://github.com/ratik-vig")}
                />
                <PhoneApps />
                
            </div>
        </div>
    )
}

export default PhoneDock