import './detailsStatus.css'

function DetailsStatus(props) {

    const { cardHeader, cardData } = props;
    return (
        <div className='card-status'>
            <div className='card-header-status'><h4 >{cardHeader}</h4></div>
            <div className='card-progress-status'><div>In-Progress</div></div>

        </div>
    )
}

export default DetailsStatus;