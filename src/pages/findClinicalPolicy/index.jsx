import "./findClinicalPolicy.css";

import { useContext, useState } from "react";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

import PdfViewer from "../../components/PdfViewer";
import { Requirements } from "../../components/Requirements";
import { findPolicyTableData, requirementsData } from "../../utils/sampleData";
import { appContext } from "../../context/AppContext";
import EvidenceCopy from "../../components/EvidenceCopy";

function FindClinicalPolicy() {
  const [pdfFile, setPdfFile] = useState();
  const [selected, setSelected] = useState();
  const [payer, setPayer] = useState("");
  const { prior_auth_desc } = useContext(appContext);

  const { evidenceResult, getAllConceptEvidence,Tab_Status } = useContext(appContext);

  function handleSelect(item) {
    setPdfFile(item.pdf_file);
    setPayer(item.payer);
    setSelected(true);
    getAllConceptEvidence("6d4fe8f3b75b4f72b5006c739057fca4");
    //console.log(findPolicyTableData,"Find table")
  }

  function handleBack() {
    setSelected(false);
  }

  return (
    <div className="findPolicy-main-contnr">
      {!selected && (
        <div className="findPolicy-first -screen">
          <div className="prior-auth">
            <h5>Prior Auth For : </h5>
            <h5 className="data-value">{prior_auth_desc}</h5>
          </div>
          <div className="findPolicy-table-container">
            <table className="findPolicy-table">
              <tr className="findPolicy-row">
                <th className="findPolicy-head">Payer</th>
                <th className="findPolicy-head">Medical Policy Name</th>
                <th></th>
              </tr>
              {findPolicyTableData.map((item, index) => {
                return (
                  <tr className="findPolicy-row" key={index}>
                    <td className="findPolicy-data">{item.payer}</td>
                    <td className="findPolicy-data">
                      {item.conference_number}
                    </td>

                    <td
                      className="select-button"
                      onClick={() => handleSelect(item)}
                    >
                      <p className="select-btn-txt">Select</p>
                      <MdKeyboardArrowRight className="select-btn-icon" />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      )}
      {selected && (
        <div className="findPolicy-second-screen">
          <div className="back-button" onClick={handleBack}>
            <FaRegArrowAltCircleLeft className="back-icon" />
            <h5>Back</h5>
          </div>
          <div className="data-contnr">
            <div className="prior-auth">
              <h5>Prior Auth For : </h5>
              <h5 className="data-value">{prior_auth_desc}</h5>
            </div>
            <div className="payer">
              <h5>Payer : </h5>
              <h5 className="data-value">{payer}</h5>
            </div>
          </div>
          <div className="findPolicy-card-contnr">
            <div className="pdf-contnr">
              <div className="collapse-contnr">
                <FaRegArrowAltCircleLeft className="collapse-button" />
                <h5>Collapse</h5>
              </div>
              <PdfViewer pdfurl={pdfFile} />
            </div>
            <div className="requirements-contnr">
              <div className="collapse-contnr">
                <FaRegArrowAltCircleLeft className="collapse-button" />
                <h5>Collapse</h5>
              </div>
              <Requirements requirementTable={requirementsData} />
            </div>
            {/* <div className="evidence-contnr">
              <div className="collapse-contnr">
                <FaRegArrowAltCircleLeft className="collapse-button" />

                <h5>Collapse</h5>
              </div>
              {/* <EvidenceCopy data={evidenceResult} className="evidence-list" /> */}
            {/* </div>  */}
          </div>
        </div>
      )}
    </div>
  );
}

export { FindClinicalPolicy };
