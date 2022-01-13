import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';

import { OFFSET_NEXT, OFFSET_PREVIOUS, PDF_WORKER_SRC } from 'constants/pdfViewer';

import PDFViewer from './PDFViewer';

pdfjs.GlobalWorkerOptions.workerSrc = PDF_WORKER_SRC;

interface IPDFViewerContainer {
  src: string;
  children?: React.FC;
}

const PDFViewerContainer: React.FC<IPDFViewerContainer> = ({ src }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const onDocumentLoadSuccess = () => {
    setCurrentPageNumber(currentPageNumber);
  };

  const changePage = (offset: number) => {
    setCurrentPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const documentBoxRef = React.useRef<HTMLElement>(null);

  const scrollToTop = () => {
    if (documentBoxRef.current) {
      documentBoxRef.current.scrollTo({ top: 0 });
    }
  };

  const clickPreviousPage = () => {
    scrollToTop();
    changePage(OFFSET_PREVIOUS);
  };

  const clickNextPage = () => {
    scrollToTop();
    changePage(OFFSET_NEXT);
  };

  return (
    <PDFViewer
      src={src}
      pageNumber={currentPageNumber}
      documentBoxRef={documentBoxRef}
      onDocumentLoadSuccess={onDocumentLoadSuccess}
      clickNextPage={clickNextPage}
      clickPreviousPage={clickPreviousPage}
    />
  );
};

export default PDFViewerContainer;
