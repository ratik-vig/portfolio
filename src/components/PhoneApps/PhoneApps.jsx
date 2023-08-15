import './PhoneApps.css'

const PhoneApps = ({ icon, filler, fillerColor, iStyle, handleClick, label }) => {
    return(
        <div>
            <div 
                className='app-icon' 
                onClick={ handleClick } 
                style={ iStyle }
            >
                {filler && <div style={{position: 'absolute', backgroundColor: fillerColor, width: 24, height: 24}}></div>}
                {icon}
            </div>
            {label && <p className='app-icon-label'>{label}</p>}
        </div>
    )
}

export default PhoneApps