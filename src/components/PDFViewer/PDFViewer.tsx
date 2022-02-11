import React, { useState } from 'react';
import { Document } from 'react-pdf';

import { FIRST_PAGE_INDEX, LAST_PAGE_INDEX } from 'constants/pdfViewer';
import { Back, Forward } from 'components/Arrows';
import Loader from 'components/Loader';

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
  const [displayLoader, setDisplayLoader] = useState<boolean>(false);
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
        {displayLoader && <Loader color="primary" />}
        <Document
          file={src}
          onLoadSuccess={() => {
            setDisplayLoader(false);
            return onDocumentLoadSuccess;
          }}
          onLoadProgress={() => setDisplayLoader(true)}
          loading=""
        >
          <StyledPage pageNumber={pageNumber} scale={1.7} loading="" />
        </Document>
      </DocumentBox>
    </PDFWrapper>
  );
};

export default PDFViewer;
