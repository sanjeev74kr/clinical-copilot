import './detailsCard.css'

function DetailsCard(props) {

    const { cardHeader, cardData } = props;
    return (
        <div className='card'>
            <h4 className='card-header'>{cardHeader}</h4>
            <p>{cardData}</p>
        </div>
    )
}

export default DetailsCard;