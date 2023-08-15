import { useEffect, useRef, useState } from 'react'
import './PhoneWidget.css'
import {FaCss3, FaJava, FaReact, FaJs, FaNodeJs, FaPython, FaSwift} from 'react-icons/fa'
import Java from '../../icons8-java-48.png'
import Css3 from '../../css.png'
import Html5 from '../../html.png'
import JS from '../../icons8-javascript-48.png'
import NodeJS from '../../icons8-nodejs-48.png'
import mongo from '../../icons8-mongodb-48.png'
import mysql from '../../icons8-mysql-48.png'
import ReactIcon from '../../icons8-react-80.png'
const PhoneWidget = () => {

    const Slide = (props) => {
        const ref = useRef()
        // useEffect(() => {
        //     // ref.current && ref.current.classList.add('slide-hide')
        //     console.log('add')
        //     return() => {
        //         ref.current && ref.current.classList.add('slide-hide')
        //         // if(ref && ref.current){
        //         //     ref.current.classList.remove('slide')
        //         // }
        //         console.log('removed')
        //     }
        // }, [props.children])

        return(
            <div ref={ref} className='slide' id="slides"> 
                {props.children}       
            </div>
        )
    }

    const Slider = () => {
        const [slideNo, setSlide] = useState(0)

        // const animateSlides = () => {
            
            
        // }

        useEffect(() => {
            const timer = setTimeout(() => {
                setSlide((slideNo+1)%2)
            }, 4000)  

            return () => {
                clearInterval(timer)
            }
        }, [slideNo])

        return (
            <div className='slider'>
                
                {slideNo === 0 ? <Slide>
                    <div className='skill-wrapper'>
                        <img src={Java} style={{width: 42, height: 42}} />
                        {/* <FaJava style={{width: 36, height: 36}} /> */}
                        <p className='skill-text'>Java</p>
                    </div>
                    <div className='skill-wrapper'>
                        <img src={Css3} style={{width: 42, height: 42}}/>
                        {/* <FaCss3 style={{width: 36, height: 36}} /> */}
                        <p className='skill-text'>CSS3</p>
                    </div>
                    <div className='skill-wrapper'>
                        <img src={JS} style={{width: 42, height: 42}}/>
                        {/* <FaJs style={{width: 36, height: 36}} /> */}
                        <p className='skill-text'>Javascript</p>
                    </div>
                    <div className='skill-wrapper'>
                        <img src={ReactIcon} style={{width: 42, height: 42}} />
                        {/* <FaReact style={{width: 36, height: 36}} /> */}
                        <p className='skill-text'>React</p>
                    </div>
                </Slide>
                :
                <Slide>
                    <div className='skill-wrapper'>
                        <img src={NodeJS} style={{width: 42, height: 42}}/>
                        {/* <FaNodeJs style={{width: 36, height: 36}} /> */}
                        <p className='skill-text'>NodeJS</p>
                    </div>
                    <div className='skill-wrapper'>
                        <img src={mongo} style={{width: 42, height: 42}}/>
                        {/* <FaPython style={{width: 36, height: 36}} /> */}
                        <p className='skill-text'>MongoDB</p>
                    </div>
                    <div className='skill-wrapper'>
                        <img src={mysql} style={{width: 42, height: 42}}/>
                        {/* <FaSwift style={{width: 36, height: 36}} /> */}
                        <p className='skill-text'>MySQL</p>
                    </div>
                    <div className='skill-wrapper'>
                        <img src={Html5} style={{width: 42, height: 42}}/>
                        <p className='skill-text'>HTML</p>
                    </div>
                </Slide>}
                
            </div>
        )
    }
    return (
        <div className='main-wrapper'>
            <div className='widget-wrapper'>
                <Slider />
            </div>
            <div style={{width: '10px',height: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: 4, height: 4, borderRadius: 2, backgroundColor: 'white'}}></div>
                <div style={{width: 4, height: 4, borderRadius: 2, backgroundColor: 'white', marginTop: 8}}></div>
            </div>
        </div>
        
    )
}

export default PhoneWidget