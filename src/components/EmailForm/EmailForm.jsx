import './EmailForm.css'

const EmailForm = () => {
    return(
        <div style={{backgroundColor: 'white', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: 8}}>
            <input style={{padding: '8px 16px', outline: 'none', marginBottom: 14, borderBottom: '1px solid #e1e1e1', borderTop: 'none', borderLeft: 'none', borderRight: 'none'}} type={'text'} placeholder='To' />
            <input type={'text'} placeholder='From' />
            <input type={'text'} placeholder='Subject' />
            <input type={'text'} placeholder='Type your message' />
        </div>
    )
}

export default EmailForm