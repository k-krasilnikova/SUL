import React from 'react';
import { Document } from 'react-pdf';

import { FIRST_PAGE_INDEX, LAST_PAGE_INDEX } from 'constants/pdfViewer';
import { Back, Forward } from 'components/Arrows';
import Loader from 'components/Loader';
import { LOADER } from 'constants/loaderTypes';

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
  displayLoader: boolean;
  clickPreviousPage: () => void;
  clickNextPage: () => void;
  changeDisplayLoader: () => void;
  onDocumentLoadSuccess?: () => void;
}

const PDFViewer: React.FC<IPDFViewer> = ({
  src,
  pageNumber,
  onDocumentLoadSuccess,
  clickPreviousPage,
  clickNextPage,
  documentBoxRef,
  displayLoader,
  changeDisplayLoader,
}) => (
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
      {displayLoader && <Loader color="primary" type={LOADER.content} />}
      <Document
        file={src}
        onLoadSuccess={() => {
          changeDisplayLoader();
          return onDocumentLoadSuccess;
        }}
        onLoadProgress={() => changeDisplayLoader()}
        loading=""
      >
        <StyledPage pageNumber={pageNumber} scale={1.7} loading="" />
      </Document>
    </DocumentBox>
  </PDFWrapper>
);

export default PDFViewer;
