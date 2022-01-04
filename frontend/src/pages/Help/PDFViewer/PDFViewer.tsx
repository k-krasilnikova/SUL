import React, { useState } from 'react';
import { Document, pdfjs } from 'react-pdf';

import Button from 'components/Button';

import { ButtonBox, DocumentBox, PageNumberText, PDFWrapper, StyledPage } from './styled';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface IPDFViewer {
  src: string;
}

const PDFViewer: React.FC<IPDFViewer> = ({ src }) => {
  const FIRST_PAGE_INDEX = 1;
  const LAST_PAGE_INDEX = 3;

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
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <PDFWrapper>
      <DocumentBox>
        <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
          <StyledPage pageNumber={pageNumber} scale={1.5} />
        </Document>
      </DocumentBox>
      <ButtonBox>
        <Button disabled={pageNumber <= FIRST_PAGE_INDEX} onClick={previousPage}>
          Previous
        </Button>
        <PageNumberText>{pageNumber}</PageNumberText>
        <Button disabled={pageNumber >= LAST_PAGE_INDEX} onClick={nextPage}>
          Next
        </Button>
      </ButtonBox>
    </PDFWrapper>
  );
};

export default PDFViewer;
