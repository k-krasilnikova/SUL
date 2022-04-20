import React, { RefObject } from 'react';
import { Document, PDFPageProxy } from 'react-pdf';

import Loader from 'components/Loader';
import { Loaders } from 'enums/loader';

import { DocumentBox, StyledPage } from './styled';

interface IPDFViewerDocument {
  documentBoxRef: RefObject<HTMLElement>;
  displayLoader: boolean;
  src: string;
  pageNumber: number;
  scale: number;
  changeDisplayLoader: () => void;
  onDocumentLoadSuccess?: () => void;
  onPageLoadSuccess?: (page: PDFPageProxy) => void;
}

const PDFViewerDocument: React.FC<IPDFViewerDocument> = ({
  documentBoxRef,
  displayLoader,
  src,
  changeDisplayLoader,
  onDocumentLoadSuccess,
  onPageLoadSuccess,
  pageNumber,
  scale,
}) => (
  <DocumentBox ref={documentBoxRef}>
    {displayLoader && <Loader color="primary" type={Loaders.content} />}
    <Document
      file={src}
      onLoadSuccess={() => {
        changeDisplayLoader();
        return onDocumentLoadSuccess;
      }}
      onLoadProgress={() => changeDisplayLoader()}
      loading=""
    >
      <StyledPage
        pageNumber={pageNumber}
        key={`${pageNumber}_${scale}`}
        scale={scale}
        onLoadSuccess={onPageLoadSuccess}
        renderTextLayer={false}
        loading=""
      />
    </Document>
  </DocumentBox>
);

export default PDFViewerDocument;
