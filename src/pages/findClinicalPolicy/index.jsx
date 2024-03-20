import "./findClinicalPolicy.css";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import pdfFile from "../../assets/sample_file.pdf";
import PdfViewer from "../../components/PdfViewer";
import { Requirements } from "../../components/Requirements";
import Evidence from "../../components/Evidence/evidence";
import { requirementsData } from "../../utils/sampleData";

function FindClinicalPolicy() {
  return (
    <div className="findPolicy-main-contnr">
      <div className="data-contnr">
        <div className="prior-auth">
          <h5>Prior Auth For : </h5>
          <h5 className="data-value">Actemera IV</h5>
        </div>
        <div className="payer">
          <h5>Payer : </h5>
          <h5 className="data-value">Aetna</h5>
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
        <div className="evidence-contnr">
          <div className="collapse-contnr">
            <FaRegArrowAltCircleLeft className="collapse-button" />
            <h5>Collapse</h5>
          </div>
          <Evidence />
        </div>
      </div>
    </div>
  );
}

export { FindClinicalPolicy };
