import file1 from "../assets/file1.pdf";
import file2 from "../assets/file2.pdf";
import file3 from "../assets/file3.pdf";

export const status = [
  { 0: "Not-Started" },
  { 1: "In-Progress" },
  { 2: "Complete" },
];

export const conditions = [{ 0: "True" }, { 1: "False" }, { 2: "Partial" }];
// export const concept = {
//     Document_identifer:
//         [{
//             CDS_Identifier: value
//         }
//     ]

// }

export const concept = {
  identifier: [
    { 0: "Heart-Cardiac Conditions" },
    { 1: "Blood Sugar Conditions" },
    { 2: "Hyper Tension Condition" },
  ],
};

export const llmAnswer = {
  Concept_LLM_Summary: "This answer is generated by LLM",
  Reference_Text: ["lorem", "sum"],
  Document_Page_Number: [1, 2, 3],
};

export const requirementsData = [
  { requirementName: "Requirement1", requirementStatus: "False" },
  { requirementName: "Requirement2", requirementStatus: "False" },
  { requirementName: "Requirement3", requirementStatus: "False" },
  { requirementName: "Requirement4", requirementStatus: "False" },
  { requirementName: "Requirement5", requirementStatus: "False" },
];

export const evidenceValidationData = [
  {
    item_no: 1,
    description:
      "Diagnosis of moderately to severely active rheumatoid arthritis",
    evidenceStatus: "True",
  },
  {
    item_no: 2,
    description:
      "History of failure to a 3 month trial of one non-biologic disease modifying anti-rheumatic drug (DMARD) [e.g., methotrexate, leflunomide, sulfasalazine, hydroxychloroquine] at maximally indicated doses, unless contraindicated or clinically significant adverse effects are experienced (document drug, date, and duration of trial).",
    evidenceStatus: "True",
  },
  {
    item_no: 3,
    description:
      "Patient has been previously treated with a targeted immunomodulator FDAapproved for the treatment of rheumatoid arthritis as documented by claims history or submission of medical records (Document drug, date, and duration of therapy) [e.g., Enbrel (etanercept), Cimzia (certolizumab), Simponi (golimumab), Orencia (abatacept), adalimumab, Xeljanz (tofacitinib), Olumiant (baricitinib), Rinvoq (upadacitinib)]",
    evidenceStatus: "Partial",
  },
  {
    item_no: 4,
    description:
      "Patient is not receiving Actemra in combination with another targeted immunomodulator [e.g., Enbrel (etanercept), Cimzia (certolizumab), Simponi (golimumab), Orencia (abatacept), adalimumab, Xeljanz (tofacitinib), Olumiant (baricitinib), Rinvoq (upadacitinib)]",
    evidenceStatus: "True",
  },
  {
    item_no: 5,
    description:
      "Prescribed by or in consultation with a rheumatologist * Patients requesting initial authorization who were established on therapy via the receipt of a manufacturer supplied sample at no cost in the prescriber’s office or any form of assistance from the Genentech sponsored Actemra Access Solutions program shall be required to meet initial authorization criteria as if patient were new to therapy. Authorization will be issued for 12 months",
    evidenceStatus: "False",
  },
];

export const findPolicyTableData = [
  {
    payer: "Cigna",
    conference_number: "Actemera VI",
    pdf_file: file1,
  },
  {
    payer: "Centene",
    conference_number: "Actemera",
    pdf_file: file2,
  },
  {
    payer: "UHG",
    conference_number: "Actemera",
    pdf_file: file3,
  },
];
