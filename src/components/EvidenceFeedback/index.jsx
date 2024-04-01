import "./evidenceFeedback.css";
import {useState} from 'react';
import { FiPaperclip } from "react-icons/fi";


function EvidenceFeedback(props) {
  const { closeModalFunc } = props;
  function handleCancel() {
    closeModalFunc();
  }
  const[selectedoptions,setSeletedoptions]=useState('');
  const [fileName, setFileName] = useState('');
function handledropdown(e){

  setSeletedoptions(e.target.value)


}
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    setFileName(file.name);
    
  }
};

const handleAttachmentClick = () => {
  document.getElementById('fileInput').click();
  
};


  return (
    <>
    <div className="evidence-status-modal">

      <div className="evidence-status-data-container">
        <div className="summary-contnr">
          <h4 className="evidenece-status-label">Summary</h4>
          <p className="summary">
            This is the list of all ICD Codes present in patient's Medical
            History
          </p>
        </div>
        <div className="description-contnr">
          <h4 className="evidenece-status-label">Evidence</h4>
         
          <div className="notes-container">
                                <span className="heading align-box">
                                Condition
                                </span>
                                <div className="condition-line">
                                
                                </div>
                                <span className="align-box">
                                <p >
                              R70.0(Elevated ESR) diagnosed on 2019-02-05
                                </p>
                                </span>
                              </div>
        </div>
        <div className="notes-contnr">
          <h4 className="evidenece-status-label">User-Notes</h4>

          <div>
            
          </div>
          <textarea className="user-notes" height={50} placeholder="Please enter your feedback"></textarea>
          
          
          
                    

          </div>
          
         
            
          <p>{fileName}</p>
       

          
          
     

        <div className="feedback-action-btn-contnr">
          {/* <button
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
          </button> */}
          {/* <div className="atch-cls">
            <input
              id="fileInput"
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <button onClick={handleAttachmentClick}>
              <FiPaperclip />
            </button>
          </div> */}
          <input
              id="fileInput"
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
             <button className="btn-atchcls" onClick={handleAttachmentClick}>
              <FiPaperclip />
            </button>
          <select value={selectedoptions} onChange={handledropdown}>
          <option>True</option>
          <option>False</option>
          <option>Partial</option>
        </select>
        <div >
        <button className="save-btn" onClick={handleCancel}>Save</button>
      </div>
        </div>
        
    </div>
    </div>
   
   
   
       
     
  

          </>
  );
}

export default EvidenceFeedback;
