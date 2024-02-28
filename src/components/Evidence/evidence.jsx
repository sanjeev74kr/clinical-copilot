import { FaTimes, FaCopy, FaCheck } from "react-icons/fa";

const Evidence = ({ data }) => {
   
  return (
    <div className="evidence-container">
      {data?.map((item, index) => (
        <div className="box-container">
          <div className="ref-text-container">
            {item.Reference_Text} on Page No.({item.Document_Page_Number})
          </div>
          <div className="para-container">
            {item.Concept_LLM_Summary}
          </div>

          <div className="note-container">
            <ul>
              <li className="list-style-none">
                <div className="notes-container">
                  <span className="heading">Condition: </span>
                  <div className="condition-line"></div>
                  <span>
                    Lipid panel complete blood count(hemogram) panel - Blood by
                    Automatedcount{" "}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="icon-container">
            <span>
              <FaCopy />
            </span>
            <span className="cross">
              <FaTimes />
            </span>
            <span className="check">
              <FaCheck />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Evidence;
