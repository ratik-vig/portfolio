import backgroundImg from '../../background2.png'
import PhoneNotch from '../PhoneNotch/PhoneNotch'
import PhoneDock from '../PhoneDock/PhoneDock'

import '../PhoneBody/PhoneBody.css'

const PhoneBody = (props) => {
    return(
        <div className="phone-body" style={{backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover'}}>
            <PhoneNotch 
                bgColor={props.bgColor}
            />
            {props.children}
        </div>
    )
}

export default PhoneBody