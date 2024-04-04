import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import EvidenceFeedback from "../EvidenceFeedback";
import "./requirements.css";
import { status } from "../../utils/sampleData";
import { FaTimes } from "react-icons/fa";

import { appContext } from "../../context/AppContext";
import DropDownBox from "../DropDownBox";
import { Button } from "@mui/material";
import AlertDialog from "../Dialog/AlertDialog";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // This will give a semi-transparent dark background
  },
  content: {
    position: "absolute",
    top: "10%",
    left: "15%",
    right: "15%",
    bottom: "21%",
    overflow: "none",
    padding: "0",
    outline: "none",
    borderRadius: "1.5rem",
  },
};

Modal.setAppElement("body");

function Requirements({ statusChange, requirementTable }) {
  const { identifier, currentSelctedDocument, updateDocumentStatus } =
    useContext(appContext);
  const [selectedCDSStatus, setSelectedCDSStatus] = useState("");
  const [tablestatus, setTablestatus] = useState(identifier);
  const [selectedCDS, setSelectedCDS] = useState(undefined);
  const [dropdownValues, setDropdownValues] = useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isOpen, setIsDialogOpen] = React.useState(false);
  const keyName = "userCredentials";
  const value = window.localStorage.getItem(keyName);
  const userCredentials = JSON.parse(value);
  const [selectedConcept, setSelectedConcept] = useState("");
  const[statusbutton,setStatusbutton]=useState(null);
  const[probablity,setProbablity]=useState(0);
  const[btnid,setBtnid]=useState(null);


 

  useEffect(() => {
    setSelectedCDS(currentSelctedDocument);
  }, []);

  useEffect(()=>{
if(identifier=== '2740f7023a414936a1481f1c2e8474a5' || identifier==='2ae50dc04c7a4904a1982f18176323a6'){
  setProbablity(95)
} else{
  setProbablity(30)
}
  }, [identifier])

  const buildDocumentPostObject = (data, docStatus) => {
    return {
      ...data,
      User_Name: userCredentials?.email.split("@")[0],

      Document_Review_Status: docStatus,
    };
  };
  const updateStates = () => {
    setIsDialogOpen(true);
  };

  const onSubmit = () => {
    statusChange(selectedCDSStatus);
    const postData = buildDocumentPostObject(
      currentSelctedDocument,
      selectedCDSStatus
    );

    updateDocumentStatus(postData, currentSelctedDocument.Identifier);
  };
  // Function to handle button click
 
  const handleButtonClick = (status) => {
    // Perform actions when the button is clicked
   
  
    
    setBtnid(null);
     setStatusbutton(status);
    openModal();
   
  };
  const handleButtonClickothers = (status,id) => {
    // Perform actions when the button is clicked

    console.log(status,"status values")
    setBtnid(id);
     setStatusbutton(status);
    openModal();
   
  };

  function handleDropDownSelection(value, field) {
    if (field === "notes") {
      setSelectedCDSStatus(value);
      
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          className="modalHeight"
        >
          <div className="evidence-status-feedback-container">
            <div className="evidence-status-heading-contnr">
              <h3 className="evidence-status-heading">Evidence</h3>
              <FaTimes
                className="evidence-close-button"
                title="close"
                onClick={closeModal}
              />
            </div>
            <hr className="linecolor"></hr>
            <EvidenceFeedback closeModalFunc={closeModal}  Btnstatus={statusbutton} Btnids={btnid}/>
          </div>
        </Modal>
      }
      <AlertDialog onSubmit={onSubmit} isOpen={isOpen} probablity={probablity} />
      <div className="prntheader">
        <h3>
          <span>Clinical Policy Decision Tree</span>
        </h3>
      </div>

     {tablestatus!==null && (tablestatus!== '2740f7023a414936a1481f1c2e8474a5') &&(tablestatus!=='2ae50dc04c7a4904a1982f18176323a6') &&( <div>
   
      <table className="custom-table">
          <thead className="bgcolor">
            <tr>
              <th className="custom-cell">Item</th>
              <th className="custom-cell">AND/OR</th>
              <th className="custom-cell">Description</th>
              <th className="custom-cell">Requirement Met</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="custom-cell" rowSpan={2}>
                1
              </td>
              <td className="custom-cell"></td>

              <td className="custom-cell">
                Diagnosis of moderately to severely active rheumatoid arthritis
              </td>
              <td className="custom-cell">
                <button
                  id='btntableone'
                  className="custom-button true-color"
                  onClick={()=>handleButtonClickothers('True','btntableone')}
                >
                  True
                </button>
              </td>
            </tr>
            <tr>
             
            </tr>
            <tr>
              <td className="custom-cell" rowSpan={3}>
                2
              </td>

              <td className="custom-cell">AND</td>

              <td className="custom-cell" >
              <p className="cellcolors">
                History of failure to a 3 month trial of one non-biologic
                disease modifying anti-rheumatic drug (DMARD) [e.g.,
                methotrexate, leflunomide, sulfasalazine, hydroxychloroquine] at
                maximally indicated doses, unless contraindicated or clinically
                significant adverse effects are experienced (document drug,
                date, and duration of trial).
                </p>
                <br></br>
                <p>OR</p>
                <br></br>
                <p className="cellcolors">
                Patient has been previously treated with a targeted
                immunomodulator FDAapproved for the treatment of rheumatoid
                arthritis as documented by claims history or submission of
                medical records (Document drug, date, and duration of therapy)
                [e.g., Enbrel (etanercept), Cimzia (certolizumab), Simponi
                (golimumab), Orencia (abatacept), adalimumab, Xeljanz
                (tofacitinib), Olumiant (baricitinib), Rinvoq (upadacitinib)]
                </p>
              </td>

              <td className="custom-cell" rowSpan={3}>
                <button
                  id='falseidone'
                  className="custom-button false-color"
                  onClick={()=>handleButtonClickothers('False','falseidone')}
                >
                 False
                </button>
              </td>
            </tr>
            <tr>
            
            
            </tr>
            <tr>
            </tr>
           
            
            <tr>
              <td className="custom-cell" rowSpan={5}>
                3
              </td>
              <td className="custom-cell">AND</td>

              <td className="custom-cell">
              <p >
                (a) History of failure, contraindication, or intolerance to two
                of the following preferred products (Document drug, date, and
                duration of trial) i. Cimzia (certolizumab) ii. One of the
                preferred adalimumab products iii. Simponi (golimumab) iv.
                Olumiant (baricitinib) v. Rinvoq (upadacitinib) vi.
                Xeljanz/Xeljanz XR (tofacitinib)vii. Enbrel (etanercept)
                </p>
                <br>
                </br>
                <p>OR</p>
                <br>
                </br>
                <p className="cellcolors"> i. Patient is currently on Actemra therapy as documented by
                claims history OR submission of medical records (Document date
                and duration of therapy)</p>

                <br></br>
                <p> AND</p>
                <br></br>
                <p className="cellcolors"> ii. Patient has not received a manufacturer supplied sample at
                no cost in the prescriber’s office, or any form of assistance
                from the Genentech sponsored Actemra Access Solutions program
                (e.g., sample card which can be redeemed at a pharmacy for a
                free supply of medication) as a means to establish as a current
                user of Actemra*</p>
              </td>

              <td className="custom-cell" rowspan={5}>
                <button
                id='trueexcep'
                  className="custom-button true-color"
                  onClick={()=>handleButtonClickothers('True','trueexcep')}
                >
                  True
                </button>
              </td>
            </tr>
            <tr>
              {" "}
              
            </tr>

            <tr>
             
              
            </tr>
            <tr>
              {" "}
             
            </tr>

            <tr>
              {" "}
            
            </tr>

            <tr>
              <td className="custom-cell" rowSpan={2}>
                4
              </td>
              <td className="custom-cell">AND</td>
              <td className="custom-cell">
              <p >
                Patient is not receiving Actemra in combination with another
                targeted immunomodulator [e.g., Enbrel (etanercept), Cimzia
                (certolizumab), Simponi (golimumab), Orencia (abatacept),
                adalimumab, Xeljanz (tofacitinib), Olumiant (baricitinib),
                Rinvoq (upadacitinib)]
                </p>
              </td>
              <td className="custom-cell">
                <button
                  className="custom-button true-color"
                 
                >
                 True
                </button>
              </td>
            </tr>
            <tr>
              {" "}
              
            </tr>
            <tr>
              <td className="custom-cell">5</td>
              <td className="custom-cell"> AND</td>
              <td className="custom-cell">
              <p className="cellcolors">
                Prescribed by or in consultation with a rheumatologist *
                Patients requesting initial authorization who were established
                on therapy via the receipt of a manufacturer supplied sample at
                no cost in the prescriber’s office or any form of assistance
                from the Genentech sponsored Actemra Access Solutions program
                shall be required to meet initial authorization criteria as if
                patient were new to therapy. Authorization will be issued for 12
                months
                </p>
              </td>
              <td className="custom-cell">
                <button
                  className="custom-button true-color"
                 
                >
                  True
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     )}
     {tablestatus==='2740f7023a414936a1481f1c2e8474a5'  &&(
                  
      <div>
      
      <table className="custom-table">
          <thead className="bgcolor">
            <tr>
              <th className="custom-cell">Item</th>
              <th className="custom-cell">AND/OR</th>
              <th className="custom-cell">Description</th>
              <th className="custom-cell">Requirement Met</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="custom-cell" rowSpan={2}>
                1
              </td>
              <td className="custom-cell"></td>

              <td className="custom-cell">
                Diagnosis of moderately to severely active rheumatoid arthritis
              </td>
              <td className="custom-cell">
                <button
                  id='btntableone'
                  className="custom-button true-color"
                  onClick={()=>handleButtonClickothers('True','btntableone')}
                >
                  True
                </button>
              </td>
            </tr>
            <tr>
             
            </tr>
            <tr>
              <td className="custom-cell" rowSpan={3}>
                2
              </td>

              <td className="custom-cell">AND</td>

              <td className="custom-cell" >
              <p className="cellcolors">
                History of failure to a 3 month trial of one non-biologic
                disease modifying anti-rheumatic drug (DMARD) [e.g.,
                methotrexate, leflunomide, sulfasalazine, hydroxychloroquine] at
                maximally indicated doses, unless contraindicated or clinically
                significant adverse effects are experienced (document drug,
                date, and duration of trial).
                </p>
                <br></br>
                <p>OR</p>
                <br></br>
                <p className="cellcolors">
                Patient has been previously treated with a targeted
                immunomodulator FDAapproved for the treatment of rheumatoid
                arthritis as documented by claims history or submission of
                medical records (Document drug, date, and duration of therapy)
                [e.g., Enbrel (etanercept), Cimzia (certolizumab), Simponi
                (golimumab), Orencia (abatacept), adalimumab, Xeljanz
                (tofacitinib), Olumiant (baricitinib), Rinvoq (upadacitinib)]
                </p>
              </td>

              <td className="custom-cell" rowSpan={3}>
                <button
                  id='tablebtn2true'
                  className="custom-button true-color"
                  onClick={()=>handleButtonClickothers('True','tablebtn2true')}
                >
                 True
                </button>
              </td>
            </tr>
            <tr>
            
            
            </tr>
            <tr>
            </tr>
           
            
            <tr>
              <td className="custom-cell" rowSpan={5}>
                3
              </td>
              <td className="custom-cell">AND</td>

              <td className="custom-cell">
              <p >
                (a) History of failure, contraindication, or intolerance to two
                of the following preferred products (Document drug, date, and
                duration of trial) i. Cimzia (certolizumab) ii. One of the
                preferred adalimumab products iii. Simponi (golimumab) iv.
                Olumiant (baricitinib) v. Rinvoq (upadacitinib) vi.
                Xeljanz/Xeljanz XR (tofacitinib)vii. Enbrel (etanercept)
                </p>
                <br>
                </br>
                <p>OR</p>
                <br>
                </br>
                <p className="cellcolors"> i. Patient is currently on Actemra therapy as documented by
                claims history OR submission of medical records (Document date
                and duration of therapy)</p>

                <br></br>
                <p> AND</p>
                <br></br>
                <p className="cellcolors"> ii. Patient has not received a manufacturer supplied sample at
                no cost in the prescriber’s office, or any form of assistance
                from the Genentech sponsored Actemra Access Solutions program
                (e.g., sample card which can be redeemed at a pharmacy for a
                free supply of medication) as a means to establish as a current
                user of Actemra*</p>
              </td>

              <td className="custom-cell" rowspan={5}>
                <button
                  id='tablebtn2true'
                  className="custom-button true-color"
                  onClick={()=>handleButtonClickothers('True','tablebtn2true')}
                >
                True
                </button>
              </td>
            </tr>
            <tr>
              {" "}
              
            </tr>

            <tr>
             
              
            </tr>
            <tr>
              {" "}
             
            </tr>

            <tr>
              {" "}
            
            </tr>

            <tr>
              <td className="custom-cell" rowSpan={2}>
                4
              </td>
              <td className="custom-cell">AND</td>
              <td className="custom-cell">
              <p >
                Patient is not receiving Actemra in combination with another
                targeted immunomodulator [e.g., Enbrel (etanercept), Cimzia
                (certolizumab), Simponi (golimumab), Orencia (abatacept),
                adalimumab, Xeljanz (tofacitinib), Olumiant (baricitinib),
                Rinvoq (upadacitinib)]
                </p>
              </td>
              <td className="custom-cell">
                <button
                  className="custom-button true-color"
                 
                >
                 True
                </button>
              </td>
            </tr>
            <tr>
              {" "}
              
            </tr>
            <tr>
              <td className="custom-cell">5</td>
              <td className="custom-cell"> AND</td>
              <td className="custom-cell">
              <p className="cellcolors">
                Prescribed by or in consultation with a rheumatologist *
                Patients requesting initial authorization who were established
                on therapy via the receipt of a manufacturer supplied sample at
                no cost in the prescriber’s office or any form of assistance
                from the Genentech sponsored Actemra Access Solutions program
                shall be required to meet initial authorization criteria as if
                patient were new to therapy. Authorization will be issued for 12
                months
                </p>
              </td>
              <td className="custom-cell">
                <button
                  className="custom-button true-color"
                 
                >
                  True
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>)}
      {tablestatus==='2ae50dc04c7a4904a1982f18176323a6'  &&(
                  
                  <div>
                  
                  <table className="custom-table">
                      <thead className="bgcolor">
                        <tr>
                          <th className="custom-cell">Item</th>
                          <th className="custom-cell">AND/OR</th>
                          <th className="custom-cell">Description</th>
                          <th className="custom-cell">Requirement Met</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="custom-cell" rowSpan={2}>
                            1
                          </td>
                          <td className="custom-cell"></td>
            
                          <td className="custom-cell">
                            Diagnosis of moderately to severely active rheumatoid arthritis
                          </td>
                          <td className="custom-cell">
                            <button
                              id='btntableone'
                              className="custom-button true-color"
                              onClick={()=>handleButtonClickothers('True','btntableone')}
                            >
                              True
                            </button>
                          </td>
                        </tr>
                        <tr>
                         
                        </tr>
                        <tr>
                          <td className="custom-cell" rowSpan={3}>
                            2
                          </td>
            
                          <td className="custom-cell">AND</td>
            
                          <td className="custom-cell" >
                          <p className="cellcolors">
                            History of failure to a 3 month trial of one non-biologic
                            disease modifying anti-rheumatic drug (DMARD) [e.g.,
                            methotrexate, leflunomide, sulfasalazine, hydroxychloroquine] at
                            maximally indicated doses, unless contraindicated or clinically
                            significant adverse effects are experienced (document drug,
                            date, and duration of trial).
                            </p>
                            <br></br>
                            <p>OR</p>
                            <br></br>
                            <p className="cellcolors">
                            Patient has been previously treated with a targeted
                            immunomodulator FDAapproved for the treatment of rheumatoid
                            arthritis as documented by claims history or submission of
                            medical records (Document drug, date, and duration of therapy)
                            [e.g., Enbrel (etanercept), Cimzia (certolizumab), Simponi
                            (golimumab), Orencia (abatacept), adalimumab, Xeljanz
                            (tofacitinib), Olumiant (baricitinib), Rinvoq (upadacitinib)]
                            </p>
                          </td>
            
                          <td className="custom-cell" rowSpan={3}>
                            <button
                              id='tablebtn2true'
                              className="custom-button true-color"
                              onClick={()=>handleButtonClickothers('True','tablebtn2true')}
                            >
                             True
                            </button>
                          </td>
                        </tr>
                        <tr>
                        
                        
                        </tr>
                        <tr>
                        </tr>
                       
                        
                        <tr>
                          <td className="custom-cell" rowSpan={5}>
                            3
                          </td>
                          <td className="custom-cell">AND</td>
            
                          <td className="custom-cell">
                          <p >
                            (a) History of failure, contraindication, or intolerance to two
                            of the following preferred products (Document drug, date, and
                            duration of trial) i. Cimzia (certolizumab) ii. One of the
                            preferred adalimumab products iii. Simponi (golimumab) iv.
                            Olumiant (baricitinib) v. Rinvoq (upadacitinib) vi.
                            Xeljanz/Xeljanz XR (tofacitinib)vii. Enbrel (etanercept)
                            </p>
                            <br>
                            </br>
                            <p>OR</p>
                            <br>
                            </br>
                            <p className="cellcolors"> i. Patient is currently on Actemra therapy as documented by
                            claims history OR submission of medical records (Document date
                            and duration of therapy)</p>
            
                            <br></br>
                            <p> AND</p>
                            <br></br>
                            <p className="cellcolors"> ii. Patient has not received a manufacturer supplied sample at
                            no cost in the prescriber’s office, or any form of assistance
                            from the Genentech sponsored Actemra Access Solutions program
                            (e.g., sample card which can be redeemed at a pharmacy for a
                            free supply of medication) as a means to establish as a current
                            user of Actemra*</p>
                          </td>
            
                          <td className="custom-cell" rowspan={5}>
                            <button
                            id='tablebtn2true'
                              className="custom-button true-color"
                              onClick={()=>handleButtonClickothers('True','tablebtn2true')}
                            >
                            True
                            </button>
                          </td>
                        </tr>
                        <tr>
                          {" "}
                          
                        </tr>
            
                        <tr>
                         
                          
                        </tr>
                        <tr>
                          {" "}
                         
                        </tr>
            
                        <tr>
                          {" "}
                        
                        </tr>
            
                        <tr>
                          <td className="custom-cell" rowSpan={2}>
                            4
                          </td>
                          <td className="custom-cell">AND</td>
                          <td className="custom-cell">
                          <p >
                            Patient is not receiving Actemra in combination with another
                            targeted immunomodulator [e.g., Enbrel (etanercept), Cimzia
                            (certolizumab), Simponi (golimumab), Orencia (abatacept),
                            adalimumab, Xeljanz (tofacitinib), Olumiant (baricitinib),
                            Rinvoq (upadacitinib)]
                            </p>
                          </td>
                          <td className="custom-cell">
                            <button
                              className="custom-button true-color"
                             
                            >
                             True
                            </button>
                          </td>
                        </tr>
                        <tr>
                          {" "}
                          
                        </tr>
                        <tr>
                          <td className="custom-cell">5</td>
                          <td className="custom-cell"> AND</td>
                          <td className="custom-cell">
                          <p className="cellcolors">
                            Prescribed by or in consultation with a rheumatologist *
                            Patients requesting initial authorization who were established
                            on therapy via the receipt of a manufacturer supplied sample at
                            no cost in the prescriber’s office or any form of assistance
                            from the Genentech sponsored Actemra Access Solutions program
                            shall be required to meet initial authorization criteria as if
                            patient were new to therapy. Authorization will be issued for 12
                            months
                            </p>
                          </td>
                          <td className="custom-cell">
                            <button
                              className="custom-button true-color"
                             
                            >
                              True
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>)}

      {tablestatus==='2ae50dc04c7a4904a1982f18176323a6'&&(
        <p className="aprvdclstrue">This Prior Authorization has 95% chance of getting approved</p>
      )}
      {tablestatus==='2740f7023a414936a1481f1c2e8474a5'&&(
        <p className="aprvdclstrue">This Prior Authorization has {probablity}% chance of getting approved</p>
      )}
      {tablestatus!==null && (tablestatus!== '2740f7023a414936a1481f1c2e8474a5') &&(tablestatus!=='2ae50dc04c7a4904a1982f18176323a6')&&(
        <p className="aprvdcls">This Prior Authorization has {probablity}% chance of getting approved</p>
      )}

      
      <div className="footrcls">
        <div className="select-notes-dd">
          <DropDownBox
            label={""}
            dropDownBoxData={status}
            type="notes"
            selectedValue={selectedCDS}
            onSelect={(value) => handleDropDownSelection(value, "notes")}
          />
        </div>
        <div className="decision-btn-container">
          <div className="save-btn-container">
            <Button
              type="button"
              style={{
                backgroundColor: "rgb(233, 79, 28)",
                borderRadius: "20px",
                fontWeight: "700",
                width: "100%",
                textTransform: 'none',
                marginTop:'10px'
              }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={updateStates}
            >
              Submit To Payer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Requirements };
