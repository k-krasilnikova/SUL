import React from 'react';
import { Document } from 'react-pdf';

import { FIRST_PAGE_INDEX, LAST_PAGE_INDEX } from 'constants/pdfViewer';
import Loader from 'components/Loader';
import { Back, Forward } from 'components/Arrows';

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
          <Back arrowDisabled={pageNumber <= FIRST_PAGE_INDEX} />
        </StyledButton>
        <PageNumberText>
          {pageNumber}/{LAST_PAGE_INDEX}
        </PageNumberText>
        <StyledButton disabled={pageNumber >= LAST_PAGE_INDEX} onClick={clickNextPage}>
          <Forward arrowDisabled={pageNumber >= LAST_PAGE_INDEX} />
        </StyledButton>
      </ButtonBox>
      <DocumentBox ref={documentBoxRef}>
        <Document
          file={src}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<Loader color="primary" />}
        >
          <StyledPage pageNumber={pageNumber} scale={1.7} />
        </Document>
      </DocumentBox>
    </PDFWrapper>
  );
};

export default PDFViewer;
