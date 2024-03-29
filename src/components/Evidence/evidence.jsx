// import * as React from "react";
// import { useContext, useState } from "react";
// import { FaCopy } from "react-icons/fa";
// import UserFeedback from "../UserFeedback/userFeedback";
// import "./evidence.css"
// import { appContext } from "../../context/AppContext";
// import { Tooltip } from "@mui/material";
// import { RiArrowDropDownLine } from "react-icons/ri";




// const Evidence = ({ data, storeReferenceTextInArray }) => {
//   const [copySuccess, setCopySuccess] = useState("");
//   const[isOpen,setIsOpen]=useState(true);
//   const [openIndex, setOpenIndex] = useState(null);
 
//   //const[isOpen,setIsOpen]=useState(true);

//   console.log(data,"value from evidence")

//   const { dispatch, updateUserFeedback, userCredentials } = useContext(appContext);

//   const onPageNumberClick = (pagenum) => {
//     dispatch({ type: "SET_PAGENUMBER", payload: pagenum });
//   };

//   const checkIsArray = (data) => {
//     try {
//       const str = data.replaceAll("'", '"');

//       const obj = JSON.parse(str);

//       if (Array.isArray(obj)) {
//         return true;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const refrenceKeyArray = (obj) => {
//     try {
//       const str = obj.replaceAll("'", '"');

//       let objVal = JSON.parse(str);
//       objVal.map((item) => item);

//       return objVal;
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   const refrenceKeyObject = (obj) => {
    
//     try {
//       const str = obj.replaceAll("'", '"');

//       const objVal = JSON.parse(str);

//       return Object.keys(objVal);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const refrenceValueObject = (obj) => {
//     try {
//       const str = obj.replaceAll("'", '"');

//       const objVal = JSON.parse(str);

//       return objVal[Object.keys(objVal)];
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const copyText = async (text) => {
//     try {
//       await navigator.clipboard.writeText(text);
//       setCopySuccess("text copied successfully.");
//       clearCopyText();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const updateFeedback = (value, identifier)=>{
//     updateUserFeedback(value, identifier);
//   }

//   const clearCopyText = () => {
//     setTimeout(() => {
//       setCopySuccess("");
//     }, 2000);
//   };
  

  

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   return (
//     <div className="evidence-container">
//       {data?.map((item, index) => (
//         <div key={index} className="evidence-item">
//           <div className="evidence-heading" onClick={() => toggleAccordion(index)}>
//             Evidence {index + 1} <RiArrowDropDownLine className={openIndex === index ? "open" : ""} />
//           </div>
//           {openIndex === index && (
//             <div className="evidence-content">
//               <div className="para-container">
//                 <span>Summary: &nbsp; </span>
//                 {item.Concept_LLM_Summary}
//               </div>
//               <div className="note-container">
//                 <ul className="listwidth">
//                   <li className="list-style-none">
//                     {checkIsArray(item.Response_Attribute) ? (
//                       <div>
//                         {refrenceKeyArray(item.Response_Attribute).map((value, innerIndex) => (
//                           <div key={innerIndex} className="notes-container">
//                             <span className="heading align-box">
//                               {Object.keys(value)}
//                             </span>
//                             <div className="condition-line"></div>
//                             <span className="align-box">
//                               {value[Object.keys(value)]}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="notes-container">
//                         <span className="heading">
//                           {refrenceKeyObject(item.Response_Attribute)}
//                         </span>
//                         <div className="condition-line"></div>
//                         <span>{refrenceValueObject(item.Response_Attribute)}</span>
//                       </div>
//                     )}
//                   </li>
//                 </ul>
//               </div>
//               <div className="icon-container">
//                 <div className="feedback-container">
//                   <Tooltip title="Copy" placement="top-start">
//                     <span onClick={() => copyText(item.Concept_LLM_Summary)}>
//                       <FaCopy />
//                     </span>
//                   </Tooltip>
//                 </div>
//                 <div className="feedback-container">
//                   <span className="page-font">Document Page</span>
//                   <div className="person-icon count-circle">
//                     <span
//                       className="pagenumclr"
//                       onClick={() =>
//                         onPageNumberClick(Number(item.Document_Page_Number), storeReferenceTextInArray[index])
//                       }
//                     >
//                       {item.Document_Page_Number}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default React.memo(Evidence);
import * as React from "react";
import { useContext, useState } from "react";
import { FaCopy } from "react-icons/fa";
import UserFeedback from "../UserFeedback/userFeedback";
import "./evidence.css"
import { appContext } from "../../context/AppContext";
import { Tooltip } from "@mui/material";

const Evidence = ({ data, storeReferenceTextInArray }) => {
  const [copySuccess, setCopySuccess] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  const { dispatch, updateUserFeedback, userCredentials } = useContext(appContext);

  
  const onPageNumberClick = (pagenum) => {
    
    dispatch({ type: "SET_PAGENUMBER", payload: pagenum });
  };

  const checkIsArray = (data) => {
    try {
      const str = data.replaceAll("'", '"');
      const obj = JSON.parse(str);
      return Array.isArray(obj);
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };
 

  const refrenceKeyArray = (obj) => {
    try {
      const str = obj.replaceAll("'", '"');

      let objVal = JSON.parse(str);
      objVal.map((item) => item);

      return objVal;
    } catch (error) {
      console.log(error.message);
    }
  };
  const refrenceKeyObject = (obj) => {
    
    try {
      const str = obj.replaceAll("'", '"');

      const objVal = JSON.parse(str);

      return Object.keys(objVal);
    } catch (error) {
      console.log(error.message);
    }
  };

  const refrenceValueObject = (obj) => {
    try {
      const str = obj.replaceAll("'", '"');

      const objVal = JSON.parse(str);

      return objVal[Object.keys(objVal)];
    } catch (error) {
      console.log(error.message);
    }
  };


  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("text copied successfully.");
      clearCopyText();
    } catch (error) {
      console.log(error);
    }
  };

  const updateFeedback = (value, identifier)=>{
    updateUserFeedback(value, identifier);
  }

  const clearCopyText = () => {
    setTimeout(() => {
      setCopySuccess("");
    }, 2000);
  };

  return (
    <div className="evidence-container">
     
      {data?.map((item, index) => (
        <div key={index} className="evidence-item">
          <div className="evidence-heading" onClick={() => toggleAccordion(index)}>
          Evidence {index + 1}   <span className='Plus-icon'> {openIndex === index ? "-" : "+"}</span>
          </div>
          {openIndex === index && (
            <div className="evidence-content">
              <div className="para-container">
                <span>Summary: &nbsp; </span>
                {item.Concept_LLM_Summary}
              </div>
              <div className="note-container">
                <ul className="listwidth">
                  <li className="list-style-none">
                    {checkIsArray(item.Response_Attribute) ? (
                      <div>
                        {refrenceKeyArray(item.Response_Attribute).map((value, innerIndex) => (
                          <div key={innerIndex} className="notes-container">
                            <span className="heading align-box">
                              {Object.keys(value)}
                            </span>
                            <div className="condition-line"></div>
                            <span className="align-box">
                              {value[Object.keys(value)]}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="notes-container">
                        <span className="heading">
                          {refrenceKeyObject(item.Response_Attribute)}
                        </span>
                        <div className="condition-line"></div>
                        <span>{refrenceValueObject(item.Response_Attribute)}</span>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
              <div className="icon-container">
                <div className="feedback-container">
                  <Tooltip title="Copy" placement="top-start">
                    <span onClick={() => copyText(item.Concept_LLM_Summary)}>
                      <FaCopy />
                    </span>
                  </Tooltip>
                </div>
                <div className="feedback-container">
                  <span className="page-font">Document Page</span>
                  <div className="person-icon count-circle">
                    <span
                      className="pagenumclr"
                      onClick={() =>
                        onPageNumberClick(Number(item.Document_Page_Number), storeReferenceTextInArray[index])
                      }
                    >
                      {item.Document_Page_Number}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="feedback-container">
            <span className="page-font">Document Page</span>
            <div className="person-icon count-circle">
            
              <span
                className="pagenumclr"
                onClick={() =>
                  onPageNumberClick(Number(item.Document_Page_Number), storeReferenceTextInArray[index])
                }
              >
                {item.Document_Page_Number}
              </span>
            </div>
            </div>
          </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default React.memo(Evidence);

