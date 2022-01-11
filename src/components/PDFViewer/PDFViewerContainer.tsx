/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';

import { OFFSET_NEXT, OFFSET_PREVIOUS, PDF_WORKER_SRC } from 'constants/pdfViewer';

import PDFViewer from './PDFViewer';

pdfjs.GlobalWorkerOptions.workerSrc = PDF_WORKER_SRC;

interface IPDFViewerContainer {
  src: string;
}

const PDFViewerContainer: React.FC<IPDFViewerContainer> = ({ src }) => {
  // const [numPages, setNumPages] = useState(null);
  const [currenctPageNumber, setCurrentPageNumber] = useState(1);

  const onDocumentLoadSuccess = (/* pdf: any */) => {
    // setNumPages(pdf.numPages);
    setCurrentPageNumber(currenctPageNumber);
  };

  const changePage = (offset: number) => {
    setCurrentPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(OFFSET_PREVIOUS);
  };

  const nextPage = () => {
    changePage(OFFSET_NEXT);
  };

  return (
    <PDFViewer
      src={src}
      onDocumentLoadSuccess={onDocumentLoadSuccess}
      pageNumber={currenctPageNumber}
      nextPage={nextPage}
      previousPage={previousPage}
    />
  );
};

export default PDFViewerContainer;
