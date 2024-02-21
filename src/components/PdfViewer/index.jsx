import { useState, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle,faMinusCircle,faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import './pdfViewer.css'
import { Document, Outline, Page, pdfjs } from "react-pdf";
//import worker for react-pdf to work
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();



function PdfViewer(props) {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [scale, setScale] = useState(1);
    const [pdfWidth, setPdfWidth] = useState(600);

    const { pdfurl, referenceTextInput } = props;

    //load pdf
    function handleDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    //outline
    function onItemClick({ pageNumber: itemPageNumber }) {
        setPageNumber(itemPageNumber);
    }

    //searchbox
    function handleInputChange(e) {
        setSearchTerm(e.target.value);
    }

    

    function handleReferenceText(){
       // setReferenceText({...referenceTextInput});
    }

    function highlightPattern(text, patterns) {
        // const combinedPattern = new RegExp(patterns.join('|'), 'gi');
        // return text.replace(combinedPattern, (match) => `<mark>${match}</mark>`);
        return text.replace(patterns, (match) => `<mark>${match}</mark>`);
    }

    const textRenderer = useCallback(
    
        (textItem) => highlightPattern(textItem.str, searchTerm),
        [searchTerm]
    );

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const handleZoomIn = () => {
        setScale(scale < 2 ? scale + 0.1 : 1);
    };

    const handleZoomOut = () => {
        setScale(scale > 0 ? scale - 0.1 : 1);
    };

    function handlePdfWidth() {
        setPdfWidth(pdfWidth <= 1000 ? pdfWidth + 100 : 600);
    }


    return (
        <div className="pdfViewer-container">
            <div className="pdfViewer-function-container">
                <FontAwesomeIcon icon={faPlusCircle} className="fa-inverse" onClick={handleZoomIn}/>
                <FontAwesomeIcon icon={faMinusCircle} className="fa-inverse" onClick={handleZoomOut}/>
                {/* <button onClick={handleZoomIn}>zoom in</button>
                <button onClick={handleZoomOut}>zoom out</button> */}
                <button onClick={handlePdfWidth}>fit to width</button>
                <input type="search" value={searchTerm} onChange={(e) => handleInputChange(e)} />
            </div>
            <div className="pdf-container">
                <Document file={pdfurl} onLoadSuccess={handleDocumentLoadSuccess}>
                    <Outline onItemClick={onItemClick} />
                    <Page pageNumber={pageNumber}
                        customTextRenderer={textRenderer}
                        scale={scale}
                        width={pdfWidth} />
                </Document>
            </div>
            <div className="page-count-container">
                <FontAwesomeIcon icon={faAngleLeft} disabled={pageNumber <= 1}
                    onClick={previousPage}/>
                <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}>prev</button>
                <p>Page {pageNumber || (numPages ? 1 : '__')} of {numPages || '__'}</p>
                <button type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}>next</button>
            </div>
        </div>
    )
}

export default PdfViewer;