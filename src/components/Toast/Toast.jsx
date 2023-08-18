import { useEffect } from 'react'
import './Toast.css'

const Toast = ({setToast}) => {

    useEffect(() => {
        setTimeout(() => {
            document.getElementsByClassName('toast-wrapper')[0]?.classList.add('toast-remove')
        }, 3000)
        setTimeout(() => {
            setToast(false)
        }, 3100)
    }, [])

    return (
        <div className='toast-wrapper'>
            <p>Copied to clipboard</p>
        </div>
    )
}

export default Toast