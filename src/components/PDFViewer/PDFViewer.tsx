import React from 'react';
import { PDFPageProxy } from 'react-pdf';

import { PDFWrapper } from './styled';
import PDFViewerButtons from './PDFViewerButtons';
import PDFViewerDocument from './PDFViewerDocument';

interface RefObject<T> {
  readonly current: T | null;
}

interface IPDFViewer {
  src: string;
  scale: number;
  pageNumber: number;
  displayLoader: boolean;
  documentBoxRef: RefObject<HTMLElement>;
  clickPreviousPage: () => void;
  clickNextPage: () => void;
  changeDisplayLoader: () => void;
  onDocumentLoadSuccess?: () => void;
  onPageLoadSuccess?: (page: PDFPageProxy) => void;
}

const PDFViewer: React.FC<IPDFViewer> = ({
  src,
  pageNumber,
  onDocumentLoadSuccess,
  onPageLoadSuccess,
  clickPreviousPage,
  clickNextPage,
  documentBoxRef,
  displayLoader,
  changeDisplayLoader,
  scale,
}) => (
  <PDFWrapper>
    <PDFViewerButtons
      pageNumber={pageNumber}
      clickPreviousPage={clickPreviousPage}
      clickNextPage={clickNextPage}
    />
    <PDFViewerDocument
      src={src}
      pageNumber={pageNumber}
      onDocumentLoadSuccess={onDocumentLoadSuccess}
      onPageLoadSuccess={onPageLoadSuccess}
      documentBoxRef={documentBoxRef}
      displayLoader={displayLoader}
      changeDisplayLoader={changeDisplayLoader}
      scale={scale}
    />
  </PDFWrapper>
);

export default PDFViewer;
