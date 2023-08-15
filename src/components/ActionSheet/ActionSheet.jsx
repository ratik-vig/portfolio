import { useState, useEffect } from 'react'
import './ActionSheet.css'

const ActionSheet = ({showActionSheet, setShow}) => {
    
    return(
        showActionSheet && <>
        <div className='overlay'></div>
        <div className='action-sheet'>
            
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
            <div className='action-sheet-cancel' onClick={() => setShow(false)}>
                <p>Cancel</p>
            </div>
        </div>
        </> 
    )
}

export default ActionSheet