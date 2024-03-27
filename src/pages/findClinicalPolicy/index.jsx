import "./findClinicalPolicy.css";

import { useContext, useEffect, useState } from "react";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

import PdfViewer from "../../components/PdfViewer";
import { Requirements } from "../../components/Requirements";
import { findPolicyTableData, requirementsData } from "../../utils/sampleData";
import { appContext } from "../../context/AppContext";
import EvidenceCopy from "../../components/EvidenceCopy";


function FindClinicalPolicy() {
  const [pdfFile, setPdfFile] = useState();
  const [selected, setSelected] = useState();
  const [pdfContrCollapse, setPdfContnrCollapse] = useState(false);
  const [requirementsContrCollapse, setRequirementsContnrCollapse] =
    useState(false);
  const [evidenceContrCollapse, setEvidenceContnrCollapse] = useState(false);
  const [payer, setPayer] = useState("");
  const { prior_auth_desc } = useContext(appContext);

  const { evidenceResult, getAllConceptEvidence } = useContext(appContext);

  useEffect(() => {
    handleResize();
    console.log("pdfContainerCollapse in useEffect:", pdfContrCollapse);
  }, [pdfContrCollapse, requirementsContrCollapse, evidenceContrCollapse]);

  function handleSelect(item) {
    setPdfFile(item.pdf_file);
    setPayer(item.payer);
    setSelected(true);
    getAllConceptEvidence("b9f3b1001fee4097b19e9e391954ee29");
  }

  function handleBack() {
    setSelected(false);
  }

  const handleCollapse = (container) => {
    if (container === "pdfContnr") {
      setPdfContnrCollapse(!pdfContrCollapse);
    } else if (container === "requirementsContnr") {
      setRequirementsContnrCollapse(!requirementsContrCollapse);
    } else if (container === "evidenceContnr") {
      setEvidenceContnrCollapse(!evidenceContrCollapse);
    }
  };

  const handleExpand = (container) => {
    if (container === "pdfContnr") {
      setPdfContnrCollapse(!pdfContrCollapse);
    } else if (container === "requirementsContnr") {
      setRequirementsContnrCollapse(!requirementsContrCollapse);
    } else if (container === "evidenceContnr") {
      setEvidenceContnrCollapse(!evidenceContrCollapse);
    }
  };

  function handleResize() {
    console.log("handleresize called");
    const pdfContnr = document.querySelector(".pdf-contnr");
    const requirementsContnr = document.querySelector(".requirements-contnr");
    const evidenceContnr = document.querySelector(".evidence-contnr");
    console.log("pdfcontnrcollapse", pdfContrCollapse);
    if (
      pdfContrCollapse &&
      requirementsContrCollapse &&
      evidenceContrCollapse
    ) {
      return;
    } else if (pdfContrCollapse && requirementsContrCollapse) {
      evidenceContnr.style.width = "100%";
    } else if (pdfContrCollapse && evidenceContrCollapse) {
      requirementsContnr.style.width = "100%";
    } else if (evidenceContrCollapse && requirementsContrCollapse) {
      pdfContnr.style.width = "100%";
    } else if (pdfContrCollapse) {
      requirementsContnr.style.width = "50%";
      evidenceContnr.style.width = "50%";
    } else if (requirementsContrCollapse) {
      pdfContnr.style.width = "50%";
      evidenceContnr.style.width = "50%";
    } else if (evidenceContrCollapse) {
      requirementsContnr.style.width = "50%";
      pdfContnr.style.width = "50%";
    } else {
      if (pdfContnr && requirementsContnr && evidenceContnr) {
        pdfContnr.style.width = "40%";
        requirementsContnr.style.width = "30%";
        evidenceContnr.style.width = "30%";
      }
    }
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
            {pdfContrCollapse && (
              <FaRegArrowAltCircleRight className="expand-icon"
                onClick={() => handleExpand("pdfContnr")}
              />
            )}
            {!pdfContrCollapse && (
              <div className="pdf-contnr">
                <div
                  className="collapse-contnr"
                  onClick={() => handleCollapse("pdfContnr")}
                >
                  <FaRegArrowAltCircleLeft className="collapse-button" />
                  <h5>Collapse</h5>
                </div>
                <PdfViewer pdfurl={pdfFile} />
              </div>
            )}
            {requirementsContrCollapse && (
              <FaRegArrowAltCircleRight className="expand-icon"
                onClick={() => handleExpand("requirementsContnr")}
              />
            )}
            {!requirementsContrCollapse && (
              <div className="requirements-contnr">
                <div
                  className="collapse-contnr"
                  onClick={() => handleCollapse("requirementsContnr")}
                >
                  <FaRegArrowAltCircleLeft className="collapse-button" />
                  <h5>Collapse</h5>
                </div>
                <Requirements requirementTable={requirementsData} />
              </div>
            )}
            {evidenceContrCollapse && (
              <FaRegArrowAltCircleRight className="expand-icon"
                onClick={() => handleExpand("evidenceContnr")}
              />
            )}
            {!evidenceContrCollapse && (
              <div className="evidence-contnr">
                <div
                  className="collapse-contnr"
                  onClick={() => handleCollapse("evidenceContnr")}
                >
                  <FaRegArrowAltCircleLeft className="collapse-button" />

                  <h5>Collapse</h5>
                </div>
                <EvidenceCopy data={evidenceResult} className="evidence-list" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export { FindClinicalPolicy };
