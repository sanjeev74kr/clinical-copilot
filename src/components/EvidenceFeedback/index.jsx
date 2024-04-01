import "./evidenceFeedback.css";

function EvidenceFeedback(props) {
  const { closeModalFunc } = props;
  function handleCancel() {
    closeModalFunc();
  }

  return (
    <div className="evidence-status-modal">

      <div className="evidence-status-data-container">
        <div className="summary-contnr">
          <h5 className="evidenece-status-label">Summary</h5>
          <p className="summary">
            This is the list of all ICD Codes present in patient's Medical
            History
          </p>
        </div>
        <div className="description-contnr">
          <h4 className="evidenece-status-label">Description</h4>
          <p className="description">
            Patient has been previously treated with a targeted immunomodulator
            FDAapproved for the treatment of rheumatoid arthritis .
            
          </p>
        </div>
        <div className="notes-contnr">
          <h4 className="evidenece-status-label">User-Notes</h4>
          <textarea className="user-notes" height={50} placeholder="Please enter your feedback"></textarea>
        </div>

        <div className="feedback-action-btn-contnr">
          <button
            className="feedback-action-btn"
            id="approve"
            onClick={handleCancel}
          >
           True
          </button>
          <button
            className="feedback-action-btn"
            id="reject"
            onClick={handleCancel}
          >
            False
          </button>
          <button
            className="feedback-action-btn"
            id="partial"
            onClick={handleCancel}
          >
            Partial
          </button>
        </div>
      </div>
    </div>
  );
}

export default EvidenceFeedback;
