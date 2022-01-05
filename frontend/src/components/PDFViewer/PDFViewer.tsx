import React from 'react';
import { Document } from 'react-pdf';

import Button from 'components/Button';
import { FIRST_PAGE_INDEX, LAST_PAGE_INDEX } from 'constants/pdfViewer';

import { ButtonBox, DocumentBox, PageNumberText, PDFWrapper, StyledPage } from './styled';

interface IPDFViewer {
  src: string;
  pageNumber: number;
  previousPage: () => void;
  nextPage: () => void;
  onDocumentLoadSuccess?: (pdf: any) => void;
}

const PDFViewer: React.FC<IPDFViewer> = ({
  src,
  pageNumber,
  onDocumentLoadSuccess,
  previousPage,
  nextPage,
}) => (
  <PDFWrapper>
    <DocumentBox>
      <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
        <StyledPage pageNumber={pageNumber} scale={1.7} />
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

export default PDFViewer;
