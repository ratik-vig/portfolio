import cartoon from '../../cartoon.png'
import ActionSheet from '../ActionSheet/ActionSheet'
import AppHeader from '../AppHeader/AppHeader'
import {useEffect, useState} from 'react'
import './Contact.css'

const DetailsWrapper = ({ data, handleClick }) => {
    return (
        <div className='details-wrapper'>
            {data.map(item => (
                <div className='details-list-item' style={{cursor: handleClick && 'pointer'}} onClick={handleClick}>
                    <p className='heading-text'>{item.tag}</p>
                    <p className='primary-text'>{item.data}</p>
                    {handleClick && <div className='active-overlay'></div>}
                </div>
            ))}
            
        </div>
    )
}

const Contact = ({setApp}) => {
    const mobile = [
        {tag: 'Phone', data: '+1 609-721-9871'}
    ]
    const email = [
        {tag: 'Primary', data: 'rv2292@nyu.edu'},
        {tag: 'Personal', data: 'ratikvig@gmail.com'}
    ]

    const location = [
        {tag: 'Location', data: 'Brooklyn NY'}
    ]

    const [showActionSheet, setShow] = useState(false)

    useEffect(() => {
        const ref = document.getElementsByClassName('contact-page')

        if(showActionSheet){
            ref[0].style.overflow = 'hidden'
        }else{
            ref[0].style.overflow = 'scroll'
        }
    }, [showActionSheet])

    return(
        <div className='contact-page' style={{animation: 'openApp 0.2s'}}>
            <div className='image-wrapper' style={{background: `url(${cartoon}) no-repeat`, backgroundSize: 'cover', backgroundPosition: '40%', paddingTop: '10%'}}>
                <AppHeader setApp={setApp} appTitle={""} iconButton={true} />
            </div>
            <div className='main-container'>
                <DetailsWrapper data={mobile} />
                <DetailsWrapper data={email} handleClick={() => {setShow(true)}}/>
                <DetailsWrapper data={location} />

            </div>
            <ActionSheet showActionSheet={showActionSheet} setShow={setShow} />
        </div>
    )
}

export default Contact