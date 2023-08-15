import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AppHeader.css'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const AppHeader = ({ setApp, appTitle }) => {

    const goHome = () => {
        
        setApp(0)
    }

    return(
        <div className='app-header'>
            <div className='header-action-button' onClick={goHome}>
                <FontAwesomeIcon icon={faChevronLeft} />
                <p className='header-action-button-text'>Back</p>
            </div>
            <div className='app-title'>
                <p>{appTitle}</p>
            </div>
        </div>
    )
}

export default AppHeader