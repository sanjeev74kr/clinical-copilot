import "./detailsCard.css";

function DetailsCard(props) {
  const { cardHeader, cardData } = props;
  return (
    <div className="card">
      <div className="card-sub-container">
        <div className="card-header">
          <h4>{cardHeader}</h4>
        </div>
        <div className="text-subtitle-container">
          <p>but never used</p>
          <p>but never used</p>
          <p>but never used</p>
        </div>
      </div>
      <div className="card-line"></div>
    </div>
  );
}

export default DetailsCard;
