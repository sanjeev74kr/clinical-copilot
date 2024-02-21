import { useState } from 'react';
import './medicalChartReview.css'
import DetailsCard from "../../components/DetailsCard"
import PdfViewer from '../../components/PdfViewer';
import pdfFile from '../../assets/sample_file.pdf'
import Header from '../../components/Header';
import DropDownBox from '../../components/DropDownBox';
import Checkbox from '../../components/Checkbox';
import { status, concept, llmAnswer } from '../../utils/sampleData';
import Accordion from '../../components/Accordion';

function MedicalChartReview() {
    const [referenceText, setReferenceText] = useState(['lorem']);
    const [selectedConcept, setSelectedConcept] = useState('');
    const [selectedReviewStatus, setSelectedReviewStatus] = useState('');
    const [expandFeedbackAccordion, setExpandFeedbackAccordian] = useState(false);

    function handleDropDownSelection(value, field) {
        if (field === 'concept') {
            setSelectedConcept(value);
            console.log("concept:", selectedConcept);
        }
        else if (field === 'review_status') {
            setSelectedReviewStatus(value);
            console.log('review_status', selectedReviewStatus);
        }
    }

    function handleFeedbackAccordion() {
        setExpandFeedbackAccordian(!expandFeedbackAccordion);
    }

    return (
        <div className='page-main-container'>
            {/* <Header /> */}
            <div className='card-container'>
                <DetailsCard cardHeader={'Prior Auth Request Details'} />
                <DetailsCard cardHeader={'Patient Details'} />
                <DetailsCard cardHeader={'Provider  Details'} />
                <DetailsCard cardHeader={'Document Details'} />
            </div>
            <div className='pdfViewer-and-operations-container'>
                
                <PdfViewer pdfurl={pdfFile} referenceTextInput={referenceText} />
                <div className='operation-container'>
                    <div className='select-concept-container'>
                        <DropDownBox label={'Select Concept'} dropDownBoxData={concept.identifier} onSelect={(value) => handleDropDownSelection(value, 'concept')} />

                        <div className='checkbox-container'>

                            <Checkbox label={'Not Started'} defaultChecked={true} />
                            <Checkbox label={'In Progress'} defaultChecked={false} />
                            <Checkbox label={'Complete'} defaultChecked={false} />
                        </div>
                    </div>
                    {selectedConcept&&
                    <Accordion accordionTitle={selectedConcept} accordionContent={
                        <div>
                            <div className='llmAnswer_container'>
                                <p>Answer: {llmAnswer.Concept_LLM_Summary}</p>
                                <p>Reference Text: {llmAnswer.Reference_Text.map((item, index) => `${item} `)}</p>
                                <p>Page Numbers: {llmAnswer.Document_Page_Number.map((item, index) => <a href='/'>{`${item} `}</a>)}</p>
                            </div>
                            <div className='functional-button-container'>
                                <button>like</button>
                                <button>dislike</button>
                                <button>copy</button>

                            </div>
                        </div>
                    }
                    />
                }
                    <Accordion accordionTitle={'Concept Notes'} accordionContent={
                        <div className='edit-container'>
                            <textarea className='editable-text'/>
                            <button className='save-button'>save</button>
                        </div>
                    } />

                    <DropDownBox label={'select Status'} dropDownBoxData={status} onSelect={(value) => handleDropDownSelection(value, 'review_status')} />
                </div>
            </div>
        </div >
    )
}

export default MedicalChartReview;