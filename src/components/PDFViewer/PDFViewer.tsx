import React from 'react';
import { Document } from 'react-pdf';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { FIRST_PAGE_INDEX, LAST_PAGE_INDEX } from 'constants/pdfViewer';

import {
  ButtonBox,
  DocumentBox,
  PageNumberText,
  PDFWrapper,
  StyledButton,
  StyledPage,
} from './styled';

interface RefObject<T> {
  readonly current: T | null;
}

interface IPDFViewer {
  src: string;
  pageNumber: number;
  documentBoxRef: RefObject<HTMLElement>;
  clickPreviousPage: () => void;
  clickNextPage: () => void;
  onDocumentLoadSuccess?: () => void;
}

const PDFViewer: React.FC<IPDFViewer> = ({
  src,
  pageNumber,
  onDocumentLoadSuccess,
  clickPreviousPage,
  clickNextPage,
  documentBoxRef,
}) => {
  return (
    <PDFWrapper>
      <ButtonBox>
        <StyledButton disabled={pageNumber <= FIRST_PAGE_INDEX} onClick={clickPreviousPage}>
          <NavigateBeforeIcon />
        </StyledButton>
        <PageNumberText>
          {pageNumber}/{LAST_PAGE_INDEX}
        </PageNumberText>
        <StyledButton disabled={pageNumber >= LAST_PAGE_INDEX} onClick={clickNextPage}>
          <NavigateNextIcon />
        </StyledButton>
      </ButtonBox>
      <DocumentBox ref={documentBoxRef}>
        <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
          <StyledPage pageNumber={pageNumber} scale={1.7} />
        </Document>
      </DocumentBox>
    </PDFWrapper>
  );
};

export default PDFViewer;
