import { useState, useEffect } from 'react'
import './ActionSheet.css'

const ActionSheet = ({showActionSheet, setShow, parentRef}) => {

    useEffect(() => {
        console.log(document.getElementsByClassName('contact-page')[0].scrollTop)
    }, [parentRef])

    return(
        showActionSheet && <>
        <div className='overlay'></div>
        <div className='action-sheet' style={{bottom: `${15 -parentRef.current.scrollTop}px`}}>
            
            <div className='action-sheet-list'>
                <div className='action-sheet-title'>Choose email provider</div>
                <div className='action-sheet-list-item'>
                    <p>Gmail</p>
                </div>
                <div className='action-sheet-list-item'>
                    <p>Yahoo</p>
                </div>
                <div className='action-sheet-list-item'>
                    <p>Outlook</p>
                </div>
                
            </div>
            <div className='action-sheet-cancel' onClick={() => {console.log(parentRef.current.scrollTop); setShow(false)}}>
                <p>Cancel</p>
            </div>
        </div>
        </> 
    )
}

export default ActionSheet