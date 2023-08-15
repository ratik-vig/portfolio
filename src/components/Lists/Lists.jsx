import './Lists.css'

const Lists = ({listItems}) => {
    return(
        <div className='list-wrapper'>
            <h3 className='list-title'>Relevant Courses</h3>
            <div className='list'>
                {listItems.map(item => (
                    <div className='list-item'>
                        <p>{item}</p>
                    </div>))
                }
                
            </div>
        </div>
    )
}

export default Lists