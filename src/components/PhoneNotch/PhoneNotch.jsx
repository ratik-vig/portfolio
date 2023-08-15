import './PhoneNotch.css'
const PhoneNotch = ({bgColor}) => {
    return(
        <div style={{ display: 'flex', alignItems: 'flex-start', backgroundColor: bgColor}}>
            <div className='time-label' style={{width: 87, top: 0, textAlign: 'center'}}>
                <p style={{color: bgColor !== 'transparent' && 'black' }}>{`${new Date().getHours()}:${new Date().getMinutes() >= 10 ? new Date().getMinutes() : `0${new Date().getMinutes()}`}`}</p>
            </div>
            <div className='notch'>
                <div className='earpiece'></div>
            </div>
            <div style={{width: 87}}></div>
        </div>
    )
}

export default PhoneNotch