import PhoneApps from "../PhoneApps/PhoneApps"
import PhoneDock from "../PhoneDock/PhoneDock"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faSchool, faUser } from "@fortawesome/free-solid-svg-icons"
import './HomeScreen.css'
import { useEffect, useRef } from "react"
import PhoneWidget from "../PhoneWidget/PhoneWidget"

const HomeScreen = ({setApp}) => {
   
    return (
        <div style={{marginTop: 32}} >
            <PhoneDock />
            <div className="app-grid">
                <PhoneWidget />
                <PhoneApps 
                    icon={<FontAwesomeIcon icon={faUser} style={{color: 'white', fontSize: 24}}/>}
                    label={"About"}
                    handleClick={() => {
                        setApp(1)
                    }}
                />
                <PhoneApps 
                    icon={<FontAwesomeIcon icon={faSchool} style={{color: 'white', fontSize: 24}}/>}
                    label={"Education"}
                    iStyle={{background: `linear-gradient(0deg, rgba(49,99,218,1) 0%, rgba(65,161,185,1) 100%)`}}
                    handleClick={() => {
                        setApp(2)
                    }}
                />
                <PhoneApps 
                    icon={<FontAwesomeIcon icon={faPhone} style={{color: 'white', fontSize: 24}}/>}
                    label={"Phone"}
                />
                <PhoneApps 
                    icon={<FontAwesomeIcon icon={faPhone} style={{color: 'white', fontSize: 24}}/>}
                    label={"Phone"}
                />
            </div>
        </div>
    )
}

export default HomeScreen