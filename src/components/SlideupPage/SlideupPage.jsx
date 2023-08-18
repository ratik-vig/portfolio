import { useRef } from 'react'
import './SlideupPage.css'

const SlideupPage = ({ setScale }) => {

    const closePage = () => {
        document.getElementsByClassName('slideup-page')[0].classList.add('slideup-page-close')
        setTimeout(() => {
            setScale(false)
        }, 250)
    }
    return(
        <div className='slideup-page'>
            <div className='cancel-button' onClick={closePage}>
                Cancel
            </div>
        </div>
    )
}

export default SlideupPage