import { useRef } from 'react'
import './SlideupPage.css'

const SlideupPage = ({ setScale, title, children }) => {

    const closePage = () => {
        document.getElementsByClassName('slideup-page')[0].classList.add('slideup-page-close')
        setTimeout(() => {
            setScale(false)
        }, 250)
    }
    return(
        <div className='slideup-page'>
            <div className='slideup-header'>
                <p>{title}</p>
                <div className='cancel-button' onClick={closePage}>
                    Cancel
                </div>
            </div>
            {children}
        </div>
    )
}

export default SlideupPage