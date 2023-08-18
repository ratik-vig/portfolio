import './CardSlider.css'
import nyu from '../../nyu.png'
import bennett from '../../bennettLogo.gif'
import Lists from '../Lists/Lists'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from 'react'

const Card = ({item}) => {
    return (
        <div style={{width: '100%'}}>
            <img src={item.id === 1 ? nyu : bennett} style={{width: '60%', marginLeft: '50%', transform: `translateX(-50%)`, borderRadius: 10, backgroundColor: '#303030'}} />
            <h2 style={{fontSize: 16, color: '#303030', textAlign: 'center'}}>{item.name}</h2>
            <p style={{fontSize: 14, color: '#303030', textAlign: 'center'}}>{item.degree}</p>
            <p style={{fontSize: 12, color: '#303030', textAlign: 'center'}}>{item.graduation}</p>
            {item.gpa && <p style={{fontSize: 14, color: '#303030', textAlign: 'center', fontWeight: 'bold'}}>{`GPA ${item.gpa}`}</p>}
            {item.courses && <Lists listItems={item.courses} />}

        </div>
    )
}

const CardSlider = ({data}) => {

    const [pageNo, setPage] = useState(0)
    const handlePageChange = direction => {
        setPage(pageNo + direction)
    }

    useEffect(() => {
        console.log(`${data.length*100}%`)
    }, [])

    const getTranslation = () => {
        console.log(`${-50*pageNo}%`)
        return `${(-100*pageNo)/data.length}%`
    }

    return(
        <div style={{ width: '80%', overflow: 'hidden'}}>
            <div style={{width: `${data.length*100}%`, display: 'flex', transform: `translateX(${getTranslation()})`, transition: 'all 0.5s ease'}}>
                {data.map(item => {
                    return(
                        <Card item={item} />
                    )
                })}
            </div>
            
            <div className='slider-control-wrapper'>
                <FontAwesomeIcon icon={faChevronLeft} className={`chevron-button ${pageNo === 0 && 'button-disable'}`} onClick={() => handlePageChange(-1)}/>
                <p className='page-text'> {`${pageNo+1} of ${data.length}`}</p>
                <FontAwesomeIcon icon={faChevronRight} className={`chevron-button ${pageNo === data.length-1 && 'button-disable'}`} onClick={() => handlePageChange(1)}/>
            </div>
        </div>
    )
}

export default CardSlider