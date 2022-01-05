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
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = (pdf: any) => {
    setNumPages(pdf.numPages);
    setPageNumber(pageNumber);
  };

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
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
      pageNumber={pageNumber}
      nextPage={nextPage}
      previousPage={previousPage}
    />
  );
};

export default PDFViewerContainer;
