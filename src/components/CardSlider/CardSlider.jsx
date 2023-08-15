import './CardSlider.css'
import nyu from '../../nyu.png'

const Card = () => {
    return (
        <div style={{width: '100%'}}>
            <img src={nyu} style={{width: '60%', marginLeft: '50%', transform: `translateX(-50%)`, borderRadius: 10}} />
            <h2 style={{fontSize: 16, color: '#303030', textAlign: 'center'}}>New York University</h2>
            <p style={{fontSize: 14, color: '#303030', textAlign: 'center'}}>Master's in Computer Engineering</p>
            <p style={{fontSize: 12, color: '#303030', textAlign: 'center'}}>May 2024</p>
            <p style={{fontSize: 14, color: '#303030', textAlign: 'center', fontWeight: 'bold'}}>GPA 3.89/4.0</p>
        </div>
    )
}

const CardSlider = () => {
    return(
        <div style={{width: '80%'}}>
            
            <Card />
            
        </div>
    )
}

export default CardSlider