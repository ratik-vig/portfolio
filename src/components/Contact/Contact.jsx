import cartoon from '../../cartoon.png'
import AppHeader from '../AppHeader/AppHeader'
import './Contact.css'

const DetailsWrapper = ({data}) => {
    return (
        <div className='details-wrapper'>
            {data.map(item => (
                <div className='details-list-item'>
                    <p className='heading-text'>{item.tag}</p>
                    <p className='primary-text'>{item.data}</p>
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

    return(
        <div className='contact-page' style={{animation: 'openApp 0.2s'}}>
            <div className='image-wrapper' style={{background: `url(${cartoon}) no-repeat`, backgroundSize: 'cover', backgroundPosition: '40%', paddingTop: '10%'}}>
                <AppHeader setApp={setApp} appTitle={""} iconButton={true} />
            </div>
            <div className='main-container'>
                <DetailsWrapper data={mobile} />
                <DetailsWrapper data={email} />
                <DetailsWrapper data={location} />

            </div>
        </div>
    )
}

export default Contact