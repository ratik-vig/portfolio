import PhoneApps from "../PhoneApps/PhoneApps"
import PhoneDock from "../PhoneDock/PhoneDock"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faCode, faFile, faLaptopCode, faPenRuler, faPencilRuler, faPhone, faSchool, faUser } from "@fortawesome/free-solid-svg-icons"
import './HomeScreen.css'
import { useEffect, useRef } from "react"
import PhoneWidget from "../PhoneWidget/PhoneWidget"
import { FaPencilRuler } from "react-icons/fa"
import { faFilePdf } from "@fortawesome/free-regular-svg-icons"

const HomeScreen = ({setApp}) => {
   
    return (
        <div style={{marginTop: 32}} >
            <PhoneDock setApp={setApp} />
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
                    icon={<FontAwesomeIcon icon={faBriefcase} style={{color: '#fff', fontSize: 24}}/>}
                    iStyle={{background: `linear-gradient(0deg, rgba(121,15,161,1) 0%, rgba(201,125,224,1) 34%)`}}
                    label={"Work Exp."}
                />
                <PhoneApps 
                    icon={<FontAwesomeIcon icon={faLaptopCode} style={{color: '#303030', fontSize: 24}}/>}
                    label={"Projects"}
                    iStyle={{background: '#fff600'}}
                />
                <PhoneApps 
                    icon={<FontAwesomeIcon icon={faFilePdf} style={{color: '#2c3e50', fontSize: 24}}/>}
                    label={"Resume"}
                    handleClick={() => window.open("https://drive.google.com/file/d/1RjyzEFXOcniFD58ft1yKpR1umwD0sMMP/view?usp=sharing")}
                />
            </div>
        </div>
    )
}

export default HomeScreen