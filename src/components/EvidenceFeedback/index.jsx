import "./evidenceFeedback.css";

function EvidenceFeedback(props) {

    const {closeModalFunc}=props;
  function handleCancel() {
    closeModalFunc();
  }

  return (
    <div className="evidence-status-modal">
      <h4 className="evidence-status-heading">Evidence</h4>
      <div className="summary-contnr">
        <h5 className="evidenece-status-label">Summary</h5>
        <p className="summary">summary-data</p>
      </div>
      <div className="description-contnr">
        <h5 className="evidenece-status-label">Description</h5>
        <p className="description">description-data</p>
      </div>
      <div className="notes-contnr">
        <h5 className="evidenece-status-label">User-Notes</h5>
        <textarea className="user-notes"></textarea>
      </div>
      <div className="feedback-action-btn-contnr">
        <button className="feedback-action-btn" onClick={handleCancel}>
          Approve
        </button>
        <button className="feedback-action-btn" onClick={handleCancel}>
          Reject
        </button>
        <button className="feedback-action-btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EvidenceFeedback;
